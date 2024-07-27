import React from "react";
import Link from "next/link";

export default function ButtonLink({
  href,
  children,
  className,
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
  color?: "white" | "orange" | "green";
}) {
  return (
    <Link
      href={href}
      className={`flex items-center rounded-full bg-midnight px-5 py-2 text-sm font-medium text-tahiti transition-colors hover:bg-blue-400 md:text-base ${className}`}
    >
      <span className="text-bg-blue">{children}</span>
    </Link>
  );
}
