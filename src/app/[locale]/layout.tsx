import type { Metadata } from "next";
import { Inter } from "next/font/google";

import { getDictionary, i18n, Locale } from "@/utils/localization";

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
    "Maksim Dubinin, Front-End Web Developer. Personal portfolio website.",
  generator: "Next.js",
  applicationName: "Portfolio",
  keywords: ["Portfolio", "Front-End", "Web Development", "Maksim Dubinin"],
  authors: { name: "Maksim Dubinin", url: "https://www.anothergosu.com" },
  creator: "Maksim Dubinin",
  publisher: "Maksim Dubinin",
  openGraph: {
    siteName: "Portfolio",
    url: "https://www.anothergosu.com",
  },
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
      <body className={`${inter.className} relative antialiased`}>
        <Header />
        {children}
        <Footer dict={dict} />
      </body>
    </html>
  );
}
