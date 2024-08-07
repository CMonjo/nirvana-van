import React from 'react';
import Link from 'next/link';
import clsx from 'clsx';

export default function Button({
  onClick,
  children,
  className,
  color = 'orange',
  icon,
  variant = 'filled',
  size = 'medium',
}: {
  onClick?: () => void;
  children: React.ReactNode;
  className?: string;
  icon?: React.ReactNode;
  color?: 'white' | 'orange' | 'green';
  variant?: 'filled' | 'outlined';
  size?: 'small' | 'medium';
}) {
  const bgClass = clsx({
    'bg-green': color === 'green' && variant === 'filled',
    'bg-white': color === 'white' && variant === 'filled',
    'bg-orange': color === 'orange' && variant === 'filled',
    'bg-transparent': variant === 'outlined',
  });

  const borderClass = clsx({
    border: variant === 'outlined',
    'border-transparent': variant === 'filled',
    'border-green': color === 'green' && variant === 'outlined',
    'border-white': color === 'white' && variant === 'outlined',
    'border-orange': color === 'orange' && variant === 'outlined',
  });

  const textClass = clsx({
    'text-orange':
      (color === 'white' && variant === 'filled') ||
      (color === 'orange' && variant === 'outlined'),
    'text-white':
      ((color === 'green' || color === 'orange') && variant === 'filled') ||
      (color === 'white' && variant === 'outlined'),
    'text-green': color === 'green' && variant === 'outlined',
  });

  const hoverBgClass = clsx({
    'hover:bg-green': color === 'green' && variant === 'outlined',
    'hover:bg-white': color === 'white' && variant === 'outlined',
    'hover:bg-orange': color === 'orange' && variant === 'outlined',
    'hover:opacity-80': variant === 'filled',
  });

  const hoverTextClass = clsx({
    'hover:text-white': variant === 'outlined',
  });

  //size small == font-xs px-3 py-1
  //size medium == font-sm px-5 py-2
  const sizeClass = clsx({
    'text-xs px-3 py-1': size === 'small',
    'text-sm px-5 py-2': size === 'medium',
  });

  return (
    <button
      onClick={onClick}
      className={clsx(
        bgClass,
        borderClass,
        hoverBgClass,
        textClass,
        hoverTextClass,
        sizeClass,
        'border-3 flex items-center rounded-full border font-acorn text-sm font-medium transition-all duration-300',
        className
      )}
    >
      {icon ? <span className={clsx(`mr-1`)}>{icon}</span> : null}
      <span>{children}</span>
    </button>
  );
}
