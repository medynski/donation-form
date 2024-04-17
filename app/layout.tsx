import type { Metadata } from "next";
import "./globals.css";

import { Work_Sans } from "next/font/google";
const workSans = Work_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "The giving block",
  description: "Set up your donation goal!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={workSans.className}>{children}</body>
    </html>
  );
}
