'use client';
import clsx from 'clsx';
import React, { ReactNode } from 'react';

type TypographyProps = {
  variant?:
    | 'h1'
    | 'h2'
    | 'h2-acorn'
    | 'h3'
    | 'h4'
    | 'body1'
    | 'body2'
    | 'body3'
    | 'caption'
    | 'caption2'
    | 'button'
    | 'none';
  html?: keyof JSX.IntrinsicElements;
  className?: string;
  style?: React.CSSProperties;
  children: ReactNode;
};

export default function Typography({
  variant = 'body1',
  html: Tag = 'p',
  className = '',
  style,
  children,
}: TypographyProps) {
  const getFontClass = (variant: string) => {
    switch (variant) {
      case 'h1':
        return 'text-4xl font-acorn font-medium';
      case 'h2':
        return 'font-kobe11 text-4xl font-medium';
      case 'h2-acorn':
        return 'font-acorn text-2xl font-medium md:text-3xl';
      case 'h3':
        return 'text-xl md:text-2xl font-light';
      case 'h4':
        return 'text-lg md:text-xl font-medium';
      case 'body1':
        return ' text-xl font-light';
      case 'body2':
        return 'font-light text-lg';
      case 'body3':
        return 'font-light text-md';
      case 'caption':
        return 'text-sm font-light';
      case 'caption2':
        return 'text-sm font-medium';
      case 'button':
        return 'font-acorn text-sm font-medium ';
      default:
        return '';
    }
  };

  return (
    <Tag className={`${getFontClass(variant)} ${className}`} style={style}>
      {children}
    </Tag>
  );
}
