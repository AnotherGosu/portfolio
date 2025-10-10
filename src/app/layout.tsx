import { Metadata } from "next";
import { Raleway } from "next/font/google";

import { cn } from "@/utils/cn";

import "./globals.css";

const font = Raleway({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Maksim Dubinin",
  description: "Maksim Dubinin - Web Developer",
  generator: "Next.js",
  applicationName: "Portfolio",
  keywords: [
    "Maksim Dubinin",
    "Personal Website",
    "Portfolio",
    "Web Developer",
    "Full-Stack Developer",
  ],
  authors: { name: "Maksim Dubinin", url: "https://anothergosu.com/" },
  creator: "Maksim Dubinin",
  publisher: "Maksim Dubinin",
  openGraph: {
    siteName: "Maksim Dubinin",
    url: "https://anothergosu.com/",
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
          `relative antialiased ${font.className} font-main bg-neutral-950 text-neutral-50`,
        )}
      >
        {children}
      </body>
    </html>
  );
}
