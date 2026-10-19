"use client";

import { motion } from "framer-motion";
import { Breadcrumbs } from "./Breadcrumbs";

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  tag?: string;
}

export function PageHeader({
  title,
  subtitle,
  tag,
}: PageHeaderProps) {
  return (
    <div className="relative w-full pt-20 pb-8 md:pt-24 md:pb-10 bg-[#fbfbf9] border-b border-zinc-300">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 text-left">
        <Breadcrumbs theme="light" />

        <div className="mt-4 max-w-3xl space-y-2">
          {tag && (
            <span className="text-[11px] font-bold tracking-[0.22em] uppercase text-zinc-800 block">
              {tag}
            </span>
          )}
          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-zinc-950 tracking-tight leading-tight"
          >
            {title}
          </motion.h1>

          {subtitle && (
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="text-sm sm:text-base text-zinc-700 font-normal leading-relaxed pt-0.5"
            >
              {subtitle}
            </motion.p>
          )}
        </div>
      </div>
    </div>
  );
}
