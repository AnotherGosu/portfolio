import type { Metadata } from "next";
import { Inter } from "next/font/google";

import { StoreProvider } from "@/utils/provider";

import { Toast } from "@/components/common/Toast";

import { Header } from "./components/Header";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Personal portfolio website",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <StoreProvider>
          <div className="grid min-h-dvh grid-rows-[max-content_1fr] gap-4 p-4">
            <Header />

            {children}
          </div>

          <Toast />
        </StoreProvider>
      </body>
    </html>
  );
}
