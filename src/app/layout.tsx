import type { Metadata } from "next";
import { Inter, Purple_Purse } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

const purplePurse = Purple_Purse({
  weight: '400',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: "My Next.js App",
  description: "Created with Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
} 