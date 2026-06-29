"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Breadcrumbs } from "./Breadcrumbs";

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  imageSrc?: string;
}

export function PageHeader({ 
  title, 
  subtitle, 
  imageSrc = "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80" 
}: PageHeaderProps) {
  return (
    <div className="relative w-full pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden bg-primary flex flex-col justify-end min-h-[350px] md:min-h-[400px]">
      {/* Background Image & Overlays */}
      <div className="absolute inset-0 z-0">
        <Image
          src={imageSrc}
          alt={title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-primary/80 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/60 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto w-full px-4 md:px-6 lg:px-8">
        <Breadcrumbs theme="dark" />
        
        <div className="mt-8">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="font-headline text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight"
          >
            {title}
          </motion.h1>
          
          {subtitle && (
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
              className="mt-3 sm:mt-4 text-white/70 text-base sm:text-lg md:text-xl max-w-2xl font-medium leading-relaxed"
            >
              {subtitle}
            </motion.p>
          )}
        </div>
      </div>
    </div>
  );
}
