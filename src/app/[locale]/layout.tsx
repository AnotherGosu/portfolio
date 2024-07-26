import type { Metadata } from "next";
import { Inter } from "next/font/google";

import { getDictionary, i18n, Locale } from "@/utils/localization";
import { StoreProvider } from "@/utils/provider";

import { Toast } from "@/components/common/Toast";

import { Footer } from "./components/Footer";
import { Header } from "./components/Header";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ locale }));
}

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "Dubinin Maksim, Front-End Web Developer. Personal portfolio website.",
};

interface RootLayoutProps {
  params: { locale: Locale };
  children: React.ReactNode;
}

export default async function RootLayout({
  params: { locale },
  children,
}: RootLayoutProps) {
  const dict = await getDictionary(locale);

  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <StoreProvider>
          <div className="grid min-h-dvh grid-rows-[max-content_1fr_max-content] gap-4">
            <Header />

            <div className="p-4">{children}</div>

            <Footer dict={dict} />
          </div>

          <Toast />
        </StoreProvider>
      </body>
    </html>
  );
}
