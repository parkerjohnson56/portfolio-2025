import type { Metadata } from "next";
import { Inter, Purple_Purse, Alegreya_Sans, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

const purplePurse = Purple_Purse({
  weight: '400',
  subsets: ['latin'],
});

const alegreyaSans = Alegreya_Sans({
  subsets: ['latin'],
  weight: ['100', '300', '400', '500', '700'],
});

const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: "portfolio :)",
  description: "parker johnson's portfolio",
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