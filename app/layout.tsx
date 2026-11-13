import type { Metadata } from "next";
import { Fredoka, Nunito } from "next/font/google";
import { Providers } from "@/components/providers";
import "./globals.css";

const fredoka = Fredoka({
  variable: "--font-fredoka",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "FutureMindsDev — building playful, useful software",
  description:
    "FutureMindsDev is a small studio crafting AI-powered and developer tools: LazyDev, LazyTranslator, TechSuggest and more.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${fredoka.variable} ${nunito.variable} antialiased font-[family-name:var(--font-nunito)]`}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
