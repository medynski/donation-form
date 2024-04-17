import type { Metadata } from "next";
import "./globals.css";
import Image from "next/image";

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
      <body className={workSans.className}>
        <div className="flex min-h-screen flex-col bg-stroke">
          <header className="bg-blue-200 fixed left-0 top-0 h-20 w-full bg-white">
            <Image
              className="absolute left-10 top-6"
              src="/logo.svg"
              alt="App Logo"
              width={146}
              height={32}
              priority
            />
          </header>
          <main className="flex min-h-screen items-center justify-center bg-stroke pt-20">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
