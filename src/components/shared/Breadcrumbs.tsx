"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export function Breadcrumbs({ theme = "light" }: { theme?: "light" | "dark" }) {
  const pathname = usePathname();

  if (pathname === "/") return null;

  const pathSegments = pathname.split("/").filter((segment) => segment !== "");
  const isDark = theme === "dark";

  return (
    <nav aria-label="Breadcrumb" className="flex items-center flex-wrap gap-1.5 text-xs text-slate-500 font-medium">
      <Link
        href="/"
        className={`hover:text-slate-900 transition-colors flex items-center gap-1 ${
          isDark ? "text-slate-400 hover:text-white" : "text-slate-500 hover:text-slate-900"
        }`}
      >
        <span>Home</span>
      </Link>

      {pathSegments.map((segment, index) => {
        const currentPath = `/${pathSegments.slice(0, index + 1).join("/")}`;
        const isLast = index === pathSegments.length - 1;
        const formattedSegment = segment
          .split("-")
          .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
          .join(" ");

        return (
          <React.Fragment key={currentPath}>
            <span className="text-slate-300 select-none">/</span>
            {isLast ? (
              <span className={`font-semibold ${isDark ? "text-white" : "text-slate-900"}`}>
                {formattedSegment}
              </span>
            ) : (
              <Link
                href={currentPath}
                className={`transition-colors ${
                  isDark ? "text-slate-400 hover:text-white" : "text-slate-500 hover:text-slate-900"
                }`}
              >
                {formattedSegment}
              </Link>
            )}
          </React.Fragment>
        );
      })}
    </nav>
  );
}
