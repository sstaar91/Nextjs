import type { Metadata } from "next";
import { Noto_Sans_KR } from "next/font/google";
import { Nav } from "@/components/organism";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./globals.css";

const notoKr = Noto_Sans_KR({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Every Soccer",
  description: "모두가 쉽게 즐길 수 있는 축구",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={notoKr.className}>
        <Nav />
        {children}
      </body>
    </html>
  );
}
