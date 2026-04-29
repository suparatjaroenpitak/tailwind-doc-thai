import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/Navbar";

export const metadata: Metadata = {
  metadataBase: new URL("https://tailwindcss-thai.local"),
  title: {
    default: "TailwindCSS ภาษาไทย - เอกสาร Tailwind สำหรับนักพัฒนาไทย",
    template: "%s | TailwindCSS ภาษาไทย"
  },
  description:
    "เอกสาร Tailwind CSS ภาษาไทย อธิบาย Utility-first, layout, flex, grid, spacing, colors และตัวอย่างโค้ดสำหรับนักพัฒนาไทย",
  keywords: [
    "Tailwind CSS ภาษาไทย",
    "tailwind docs thai",
    "เรียน Tailwind",
    "utility first css",
    "frontend ไทย"
  ],
  openGraph: {
    title: "TailwindCSS ภาษาไทย",
    description: "คู่มือ Tailwind CSS ภาษาไทยแบบ developer friendly พร้อมตัวอย่างและ playground",
    type: "website",
    locale: "th_TH"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="th" suppressHydrationWarning>
      <body className="antialiased">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
