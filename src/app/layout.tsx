import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: "portfolio :)",
  description: "parker johnson's portfolio",
  openGraph:{
    title: "portfolio :)",
    description: "parker johnson's portfolio",
    url: "https://parkerj.org",
    siteName: "Parker's Portfolio",
    images: [
      {
        url: "/images/favicon.png",
        width: 800,
        height: 600,
      }
    ],
    locale: "en_US",
  },
  icons: {
    icon: 'images/favicon.png'
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                if (localStorage.getItem('darkMode') === 'false') {
                  document.documentElement.classList.remove('dark');
                }
              } catch (e) {}
            `,
          }}
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
} 