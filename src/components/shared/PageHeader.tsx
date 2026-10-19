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
    <div className="relative w-full pt-24 pb-6 md:pt-28 md:pb-8 bg-white border-b border-zinc-300">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 text-left">
        <Breadcrumbs theme="light" />

        <div className="mt-3 max-w-2xl space-y-1.5">
          {tag && (
            <span className="text-[11px] font-bold tracking-[0.22em] uppercase text-zinc-800 block">
              {tag}
            </span>
          )}
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35 }}
            className="text-2xl sm:text-3xl md:text-[34px] font-extrabold text-zinc-950 tracking-tight leading-tight"
          >
            {title}
          </motion.h1>

          {subtitle && (
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: 0.08 }}
              className="text-xs sm:text-sm text-zinc-700 font-normal leading-relaxed"
            >
              {subtitle}
            </motion.p>
          )}
        </div>
      </div>
    </div>
  );
}
