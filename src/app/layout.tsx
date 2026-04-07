import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Noto_Sans_Thai } from "next/font/google";
import "./globals.css";

/* โหลดฟอนต์ไทยให้หน้าตาใกล้ dashboard จริงและอ่านง่าย */
const notoSansThai = Noto_Sans_Thai({
  subsets: ["thai"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-noto-sans-thai",
});

export const metadata: Metadata = {
  title: "TERRABKK Dashboard",
  description: "Dashboard UI clone with Next.js + Tailwind CSS + TypeScript",
};

type RootLayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="th">
      <body className={`${notoSansThai.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}