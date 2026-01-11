import type { Metadata } from "next";
import { Spline_Sans, Noto_Sans, Newsreader, Manrope } from "next/font/google";
import "./globals.css";

const splineSans = Spline_Sans({
  variable: "--font-spline",
  subsets: ["latin"],
});

const notoSans = Noto_Sans({
  variable: "--font-noto",
  subsets: ["latin"],
});

const newsreader = Newsreader({
  variable: "--font-newsreader",
  subsets: ["latin"],
  adjustFontFallback: false,
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Deos Record",
  description: "Abuja's Premier Multi-Media Production Studio",
  icons: {
    icon: '/icon.jpg',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
      </head>
      <body
        className={`${splineSans.variable} ${notoSans.variable} ${newsreader.variable} ${manrope.variable} antialiased font-display bg-background-light dark:bg-background-dark text-slate-900 dark:text-white`}
      >
        {children}
      </body>
    </html>
  );
}
