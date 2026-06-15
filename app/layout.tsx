import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Water-Wise | Water Testing PEI",
  description:
    "Prince Edward Island's trusted water quality testing service. Certified sampling, fast results, and expert advice for homes, cottages, and businesses.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={geist.variable}>
      <body style={{ fontFamily: "var(--font-geist-sans), -apple-system, sans-serif" }}>
        {children}
      </body>
    </html>
  );
}
