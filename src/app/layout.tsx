import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "./components/Header";
import LNB from "./components/LNB";
import RNB from "./components/RNB";
import "./globals.css";

// Inter 폰트
const inter = Inter({
  variable: "--font-inter",
  fallback: ["Helvetica", "Arial", "sans-serif"],
});

export const metadata: Metadata = {
  title: "Goodbye, Not Goodbye Mail",
  description: "대리님 저 이번엔 진짜 퇴사할거예요",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased flex flex-col h-screen`}>
        <Header />
        <div className="flex flex-1 min-h-0">
          <LNB />
          <div className="flex-1 overflow-auto">{children}</div>
          <RNB />
        </div>
      </body>
    </html>
  );
}
