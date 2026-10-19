import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import { LenisProvider } from "@/components/providers/LenisProvider";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Aura Dental Clinic | Gentle, Honest Dental Care in New York",
  description:
    "Gentle, stress-free dental care in Midtown Manhattan. From routine cleanings and checkups to clear aligners and natural porcelain veneers.",
  keywords: [
    "Dentist New York",
    "Gentle Dentist NYC",
    "Porcelain Veneers",
    "Invisalign Provider",
    "Dental Implants",
    "Routine Cleanings",
    "Emergency Dental Care",
  ],
  openGraph: {
    title: "Aura Dental Clinic | Gentle, Honest Dental Care in New York",
    description:
      "A calm, welcoming dental clinic in Midtown Manhattan. Gentle cleanings, clear aligners, and natural smile care.",
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
        className={`${plusJakartaSans.variable} font-sans antialiased min-h-screen flex flex-col bg-surface text-on-surface`}
      >
        <LenisProvider>{children}</LenisProvider>
      </body>
    </html>
  );
}
