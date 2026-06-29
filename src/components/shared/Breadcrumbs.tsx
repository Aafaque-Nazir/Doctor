"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import React from "react";

export function Breadcrumbs({ theme = "light" }: { theme?: "light" | "dark" }) {
  const pathname = usePathname();
  
  if (pathname === "/") return null;

  const pathSegments = pathname.split("/").filter((segment) => segment !== "");
  
  const isDark = theme === "dark";
  const textPrimary = isDark ? "text-white" : "text-on-surface";
  const textMuted = isDark ? "text-white/60" : "text-on-surface-variant";
  const textHover = isDark ? "hover:text-white" : "hover:text-primary";
  const iconColor = isDark ? "text-white/40" : "text-on-surface-variant/50";

  const generateBreadcrumbs = () => {
    let currentPath = "";
    return pathSegments.map((segment, index) => {
      currentPath += `/${segment}`;
      const isLast = index === pathSegments.length - 1;
      
      // Format segment text (e.g. internal-medicine -> Internal Medicine)
      const formattedSegment = segment
        .split("-")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");

      return (
        <React.Fragment key={currentPath}>
          <span className={`material-symbols-outlined text-[16px] mx-2 ${iconColor}`}>
            chevron_right
          </span>
          {isLast ? (
            <span className={`${textPrimary} font-semibold font-label uppercase tracking-widest text-xs`}>
              {formattedSegment}
            </span>
          ) : (
            <Link
              href={currentPath}
              className={`${textMuted} ${textHover} transition-colors font-label uppercase tracking-widest text-xs font-semibold`}
            >
              {formattedSegment}
            </Link>
          )}
        </React.Fragment>
      );
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`flex items-center flex-wrap py-4 relative z-20 ${!isDark ? 'border-b border-outline-variant/20' : ''}`}
    >
      <Link
        href="/"
        className={`flex items-center ${textMuted} ${textHover} transition-colors gap-1`}
      >
        <span className="material-symbols-outlined text-[18px]">home</span>
        <span className="font-label uppercase tracking-widest text-xs font-semibold mt-[2px]">Home</span>
      </Link>
      {generateBreadcrumbs()}
    </motion.div>
  );
}
