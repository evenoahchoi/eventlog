import SessionWrapper from "./components/sessionWrapper";

import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "경조사노트",
  description: "Generated by create 비구르미",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <SessionWrapper>
      <html lang="ko">
        <body>{children}</body>
      </html>
    </SessionWrapper>
  );
}