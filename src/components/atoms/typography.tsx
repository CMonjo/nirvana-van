'use client';
import React, { ReactNode } from 'react';

type TypographyProps = {
  variant?: 'h1' | 'h2' | 'h3' | 'body1' | 'body2' | 'caption' | 'button';
  html?: keyof JSX.IntrinsicElements;
  className?: string;
  children: ReactNode;
};

export default function Typography({
  variant = 'body1',
  html: Tag = 'p',
  className = '',
  children,
}: TypographyProps) {
  const getFontClass = (variant: string) => {
    switch (variant) {
      case 'h1':
        return 'text-4xl font-acorn font-medium';
      case 'h2':
        return 'font-kobe11 text-4xl font-medium';
      case 'h3':
        return 'text-2xl font-light';
      case 'body1':
        return ' text-xl font-light';
      case 'body2':
        return 'font-light text-lg';
      case 'caption':
        return 'text-sm font-light';
      case 'button':
        return 'font-acorn text-sm font-medium ';
      default:
        return '';
    }
  };

  return (
    <Tag className={`${getFontClass(variant)} ${className}`}>{children}</Tag>
  );
}
