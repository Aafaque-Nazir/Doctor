import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import { LenisProvider } from "@/components/providers/LenisProvider";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ClinicalCurator | Precision in Care",
  description: "The Future of Personalized Care.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="light [&.dark]:dark">
      <head>
        {/* Material Symbols */}
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className={`${inter.variable} ${manrope.variable} antialiased min-h-screen flex flex-col font-body selection:bg-primary-fixed selection:text-on-primary-fixed bg-surface text-on-surface`}
      >
        <LenisProvider>{children}</LenisProvider>
      </body>
    </html>
  );
}
