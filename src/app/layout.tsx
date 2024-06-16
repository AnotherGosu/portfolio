import type { Metadata } from "next";
import { Inter } from "next/font/google";

import { StoreProvider } from "@/utils/provider";

import { Footer } from "./components/Footer";
import { Header } from "./components/Header";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: { default: "Playground", template: "Playground • %s" },
  description: "Playgroud for pet-projects",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <StoreProvider>
          <div className="grid min-h-dvh grid-rows-[max-content_1fr_max-content] gap-4 p-4">
            <Header />

            {children}

            <Footer />
          </div>
        </StoreProvider>
      </body>
    </html>
  );
}
