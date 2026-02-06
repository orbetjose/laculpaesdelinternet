import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import localFont from 'next/font/local'
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const poppins = localFont({
  src: [
    {
      path: './fonts/Poppins-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
  ],
  variable: '--font-poppins',
  display: 'swap',
})

const poppinsItalic = localFont({
  src: [
    {
      path: './fonts/Poppins-SemiBoldItalic.ttf',
      weight: '600',
      style: 'italic',
    },
  ],
  variable: '--font-poppins-italic',
  display: 'swap',
})

const dirtyLizard = localFont({
  src: [
    {
      path: './fonts/Dirty-lizard.ttf',
      weight: '400',
      style: 'normal',
    }
  ],
  variable: '--font-dirty-lizard',
  display: 'swap',
})

export const metadata: Metadata = {
  title: "La Culpa es de Internet | Humor y Comedia sobre el Mundo Digital",
  description: "Sumérgete en La Culpa es de Internet: una colección de monólogos y sketches de comedia española sobre lo absurdo, divertido y surrealista del mundo digital.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} ${dirtyLizard.variable} ${poppinsItalic.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
