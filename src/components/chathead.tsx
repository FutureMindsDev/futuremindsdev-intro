"use client";

import React, { useState, useRef, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import { X, Send, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function Chathead({ portfolio }: { portfolio: unknown }) {
  const [isOpen, setIsOpen] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<
    { role: "user" | "model"; parts: { text: string }[] }[]
  >([]);
  const [isLoading, setIsLoading] = useState(false);

  const sendMessage = async (content: string) => {
    if (!content.trim()) return;
    const userMessage = { role: "user" as const, parts: [{ text: content }] };
    const newMessages = [...messages, userMessage];
    setMessages(newMessages);
    setInput("");
    setIsLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: newMessages, portfolioData: portfolio }),
      });
      if (!response.ok) throw new Error("Network response was not ok");
      if (!response.body) throw new Error("No response body");

      const reader = response.body.getReader();
      const decoder = new TextDecoder();
      let done = false;

      setMessages((prev) => [...prev, { role: "model", parts: [{ text: "" }] }]);

      while (!done) {
        const { value, done: doneReading } = await reader.read();
        done = doneReading;
        if (value) {
          const chunkValue = decoder.decode(value, { stream: true });
          setMessages((prev) => {
            const updated = [...prev];
            const lastIndex = updated.length - 1;
            const last = updated[lastIndex];
            if (last.role === "model") {
              updated[lastIndex] = {
                ...last,
                parts: [{ text: last.parts[0].text + chunkValue }],
              };
            }
            return updated;
          });
        }
      }
    } catch (error) {
      console.error("Error sending message:", error);
      setMessages((prev) => [
        ...prev,
        { role: "model", parts: [{ text: "Sorry, something went wrong." }] },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const getMessageText = (m: { parts?: { text?: string }[] }): string =>
    Array.isArray(m.parts) && m.parts[0]?.text ? m.parts[0].text : "";

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const suggestedInquiries = [
    "What projects has FutureMindsDev built?",
    "Tell me about LazyDev.",
    "Who is on the team?",
  ];

  return (
    <div className="fixed bottom-6 right-6 z-[100] flex flex-col items-end">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="mb-4 w-80 sm:w-96 rounded-3xl overflow-hidden border border-border bg-card/80 backdrop-blur-xl shadow-lg flex flex-col h-[500px] max-h-[70vh]"
          >
            <div className="p-4 border-b border-border flex justify-between items-center bg-secondary/60">
              <div className="flex items-center gap-2 font-display font-semibold">
                <Sparkles className="w-5 h-5 text-primary" />
                <span>FutureMindsDev AI</span>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1 rounded-full hover:bg-accent transition-colors"
                aria-label="Close chat"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center text-muted-foreground space-y-4">
                  <div className="p-4 rounded-full bg-secondary">
                    <Sparkles className="w-8 h-8 opacity-60" />
                  </div>
                  <p className="text-sm">
                    Hi! Ask me anything about FutureMindsDev.
                  </p>
                  <div className="flex flex-wrap gap-2 justify-center mt-2 px-2">
                    {suggestedInquiries.map((q) => (
                      <button
                        key={q}
                        onClick={() => sendMessage(q)}
                        className="text-xs text-left bg-secondary border border-border rounded-xl px-3 py-2 hover:bg-accent transition-colors"
                      >
                        {q}
                      </button>
                    ))}
                  </div>
                </div>
              ) : (
                messages.map((m, index) => (
                  <div
                    key={index}
                    className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}
                  >
                    <div
                      className={`max-w-[80%] p-3 rounded-2xl text-sm ${
                        m.role === "user"
                          ? "bg-primary text-primary-foreground rounded-tr-sm"
                          : "bg-secondary text-secondary-foreground rounded-tl-sm border border-border"
                      }`}
                    >
                      {m.role === "user" ? (
                        getMessageText(m)
                      ) : (
                        <ReactMarkdown>{getMessageText(m)}</ReactMarkdown>
                      )}
                    </div>
                  </div>
                ))
              )}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="max-w-[80%] p-3 rounded-2xl rounded-tl-sm bg-secondary border border-border flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-muted-foreground animate-bounce" />
                    <span
                      className="w-2 h-2 rounded-full bg-muted-foreground animate-bounce"
                      style={{ animationDelay: "0.2s" }}
                    />
                    <span
                      className="w-2 h-2 rounded-full bg-muted-foreground animate-bounce"
                      style={{ animationDelay: "0.4s" }}
                    />
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            <div className="p-3 bg-secondary/60 border-t border-border">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  if (!isLoading && input.trim()) sendMessage(input);
                }}
                className="relative flex items-center"
              >
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" && !e.shiftKey) {
                      e.preventDefault();
                      if (!isLoading && input.trim()) sendMessage(input);
                    }
                  }}
                  placeholder="Ask a question..."
                  className="w-full bg-background border border-border rounded-full py-2.5 px-4 focus:outline-none focus:ring-2 focus:ring-ring text-sm placeholder:text-muted-foreground"
                />
                <button
                  type="submit"
                  className="absolute right-2 p-1.5 rounded-full bg-primary text-primary-foreground"
                  aria-label="Send"
                >
                  <Send className="w-4 h-4" />
                </button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 rounded-full flex items-center justify-center bg-primary text-primary-foreground shadow-lg hover:scale-105 active:scale-95 transition-all"
        aria-label="Toggle chat"
      >
        {isOpen ? <X className="w-6 h-6" /> : <Sparkles className="w-6 h-6" />}
      </button>
    </div>
  );
}
