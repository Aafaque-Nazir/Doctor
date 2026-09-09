import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import { LenisProvider } from "@/components/providers/LenisProvider";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Aura Dental & Smile Studio | Modern, Pain-Free Dentistry",
  description: "Experience gentle, aesthetic dentistry in New York. Specializing in porcelain veneers, Invisalign clear aligners, pain-free hygiene cleanings, and same-day dental emergencies.",
  keywords: [
    "Dentist New York",
    "Cosmetic Dentistry",
    "Porcelain Veneers",
    "Invisalign Provider",
    "Dental Implants",
    "Pain-Free Dentist",
    "Emergency Dental Care",
  ],
  openGraph: {
    title: "Aura Dental & Smile Studio | Modern, Pain-Free Dentistry",
    description: "Gentle aesthetic dentistry, porcelain veneers, Invisalign, and comprehensive family dental care.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" data-scroll-behavior="smooth" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@300..500,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        suppressHydrationWarning
        className={`${manrope.variable} font-body antialiased min-h-screen flex flex-col bg-surface text-on-surface`}
      >
        <LenisProvider>{children}</LenisProvider>
      </body>
    </html>
  );
}
