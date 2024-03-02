import type { Metadata } from "next";

import NavBar from "@/components/NavBar";

import { exo2, orbitron } from "@/app/fonts";

import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Indie Gamer",
    template: "%s | Indie Gamer",
  },
  description: "Only the best indie games, reviewed for you.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${orbitron.variable} ${exo2.variable}`}>
      <body className="flex flex-col min-h-screen px-4 py-2 bg-orange-50">
        <header className="">
          <NavBar />
        </header>
        <main className="py-3 grow">{children}</main>
        <footer className="text-center text-xs border-t py-3 text-slate-500">
          Game data and images courtesy of{" "}
          <a
            href="https://rawg.io/"
            target="_blank"
            className="text-orange-800 hover:underline"
          >
            RAWG
          </a>
        </footer>
      </body>
    </html>
  );
}
