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
    <div className="relative w-full pt-28 pb-14 md:pt-36 md:pb-18 bg-slate-50/70 border-b border-slate-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs theme="light" />

        <div className="mt-6 max-w-3xl space-y-3">
          {tag && (
            <span className="text-xs font-bold tracking-widest uppercase text-sky-700 font-label">
              {tag}
            </span>
          )}
          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 tracking-tight leading-tight"
          >
            {title}
          </motion.h1>

          {subtitle && (
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed pt-1"
            >
              {subtitle}
            </motion.p>
          )}
        </div>
      </div>
    </div>
  );
}
