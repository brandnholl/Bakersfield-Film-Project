import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";

import type { Metadata } from "next";
import "./globals.css";
import Footer from "@/components/layout/footer";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${GeistSans.variable} ${GeistMono.variable} antialiased`}
      >
        {children}
        <Footer/>
      </body>
    </html>
  );
}
