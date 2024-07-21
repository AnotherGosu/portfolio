import type { Metadata } from "next";
import { Inter } from "next/font/google";

import { StoreProvider } from "@/utils/provider";

import { Toast } from "@/components/common/Toast";

import { Footer } from "./components/Footer";
import { Header } from "./components/Header";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "Dubinin Maksim, Front-End Web Developer. Personal portfolio website.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <StoreProvider>
          <div className="grid min-h-dvh grid-rows-[max-content_1fr_max-content] gap-4">
            <Header />

            <div className="p-4">{children}</div>

            <Footer />
          </div>

          <Toast />
        </StoreProvider>
      </body>
    </html>
  );
}
