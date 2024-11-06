import React, { ReactNode, ComponentPropsWithoutRef } from 'react';
import Link from 'next/link';

interface LinkWrapperProps extends ComponentPropsWithoutRef<typeof Link> {
  children: ReactNode;
  className?: string;
}

export default function LinkWrapper({
  children,
  className,
  ...props
}: LinkWrapperProps) {
  return (
    <Link
      {...props}
      className={`transition-all duration-300 hover:opacity-70 ${className || ''}`}
    >
      {children}
    </Link>
  );
}
