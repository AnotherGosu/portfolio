import type { Metadata } from "next";
import { Inter, Noto_Sans_KR } from "next/font/google";

import { cn } from "@/utils/cn";
import { getDictionary, i18n, Locale } from "@/utils/localization";

import { Footer } from "./components/Footer";
import { Header } from "./components/Header";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const noto = Noto_Sans_KR({ subsets: ["latin"] });

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ locale }));
}

export const metadata: Metadata = {
  title: "Maksim Dubinin",
  description: "Front-End Web Developer. Personal website.",
  generator: "Next.js",
  applicationName: "Personal website",
  keywords: [
    "Maksim Dubinin",
    "Personal Website",
    "Front-End",
    "Web Development",
  ],
  authors: { name: "Maksim Dubinin", url: "https://www.anothergosu.com" },
  creator: "Maksim Dubinin",
  publisher: "Maksim Dubinin",
  openGraph: { siteName: "Maksim Dubinin", url: "https://www.anothergosu.com" },
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
    <html lang={locale}>
      <body
        className={cn("relative antialiased", {
          [inter.className]: locale === "en",
          [noto.className]: locale === "ko",
        })}
      >
        <Header />
        {children}
        <Footer dict={dict} />
      </body>
    </html>
  );
}
