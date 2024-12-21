import type { Metadata } from "next";
import { Gabarito } from "next/font/google";

import { cn } from "@/utils/cn";

import "./globals.css";

const font = Gabarito({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-main",
});

export const metadata: Metadata = {
  title: "Maksim Dubinin",
  description: "Maksim Dubinin - Web Developer",
  generator: "Next.js",
  applicationName: "Personal website",
  keywords: ["Maksim Dubinin", "Personal Website", "Web Development"],
  authors: { name: "Maksim Dubinin", url: "https://www.anothergosu.com/" },
  creator: "Maksim Dubinin",
  publisher: "Maksim Dubinin",
  openGraph: {
    siteName: "Maksim Dubinin",
    url: "https://www.anothergosu.com/",
  },
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body
        className={cn(
          `relative antialiased ${font.variable} bg-neutral-800 bg-[radial-gradient(#262626_50%,_#0a0a0a)] font-main text-neutral-50`,
        )}
      >
        {children}
      </body>
    </html>
  );
}
