import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import { LenisProvider } from "@/components/providers/LenisProvider";
import { MedicalLoader } from "@/components/ui/MedicalLoader";
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
  title: "ClinicalCurator | Elite Precision Medicine",
  description: "Advanced, highly-personalized clinical care and concierge medicine designed for the modern individual.",
  openGraph: {
    title: "ClinicalCurator | Elite Precision Medicine",
    description: "Setting the benchmark for advanced, highly-personalized clinical care.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "ClinicalCurator",
    description: "The future of personalized concierge medicine.",
  }
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
        className={`${inter.variable} ${manrope.variable} antialiased min-h-screen flex flex-col font-body selection:bg-primary selection:text-on-primary bg-surface text-on-surface`}
      >
        <MedicalLoader>
          <LenisProvider>{children}</LenisProvider>
        </MedicalLoader>
      </body>
    </html>
  );
}
