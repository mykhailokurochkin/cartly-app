import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Cartly — Checkout",
  description: "Fast and seamless checkout experience powered by Cartly.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.className} suppressHydrationWarning>
      <body className="antialiased bg-bg-primary text-text-primary min-h-screen">
        {children}
      </body>
    </html>
  );
}
