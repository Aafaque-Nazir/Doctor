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
    <nav aria-label="Breadcrumb" className="flex items-center flex-wrap gap-1.5 text-xs text-zinc-700 font-medium">
      <Link
        href="/"
        className={`hover:text-zinc-950 transition-colors flex items-center gap-1 font-semibold ${
          isDark ? "text-zinc-300 hover:text-white" : "text-zinc-700 hover:text-zinc-950"
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
            <span className={isDark ? "text-zinc-500 select-none font-bold" : "text-zinc-500 select-none font-bold"}>/</span>
            {isLast ? (
              <span className={`font-bold ${isDark ? "text-white" : "text-zinc-950"}`}>
                {formattedSegment}
              </span>
            ) : (
              <Link
                href={currentPath}
                className={`transition-colors font-semibold ${
                  isDark ? "text-zinc-300 hover:text-white" : "text-zinc-700 hover:text-zinc-950"
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
