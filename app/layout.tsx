import type { Metadata } from "next";
import { Manrope, Google_Sans_Code } from "next/font/google";

import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
});

const googleSansCode = Google_Sans_Code({
  variable: "--font-google-sans-code",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "FAIQ | Software Developer",
  description:
    "Full stack engineer with 5+ years building scalable, AI-native applications across the stack.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${manrope.variable} ${googleSansCode.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
