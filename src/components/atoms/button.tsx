import React from 'react';
import clsx from 'clsx';

export default function Button({
  onClick,
  children,
  className,
  color = 'orange',
  icon,
  variant = 'filled',
  size = 'medium',
  disabled = false,
  textColor,
}: {
  onClick?: () => void;
  children: React.ReactNode;
  className?: string;
  icon?: React.ReactNode;
  color?: 'white' | 'orange' | 'green';
  textColor?: 'white' | 'orange' | 'green';
  variant?: 'filled' | 'outlined';
  size?: 'small' | 'medium' | 'large';
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
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
      textColor === 'orange' ||
      (!textColor &&
        ((color === 'white' && variant === 'filled') ||
          (color === 'orange' && variant === 'outlined'))),
    'text-white':
      textColor === 'white' ||
      (!textColor &&
        (((color === 'green' || color === 'orange') && variant === 'filled') ||
          (color === 'white' && variant === 'outlined'))),
    'text-green':
      textColor === 'green' ||
      (!textColor && color === 'green' && variant === 'outlined'),
  });

  const hoverBgClass = clsx({
    'hover:bg-green': color === 'green' && variant === 'outlined',
    'hover:bg-white': color === 'white' && variant === 'outlined',
    'hover:bg-orange': color === 'orange' && variant === 'outlined',
    'hover:opacity-90': variant === 'filled',
  });

  const hoverTextClass = clsx({
    'hover:text-white': variant === 'outlined' && color !== 'white',
    'hover:text-dark': variant === 'outlined' && color === 'white',
  });

  const sizeClass = clsx({
    'text-xs px-3 py-1': size === 'small',
    'text-sm px-5 py-2': size === 'medium',
    'text-base px-6 py-3': size === 'large',
  });

  const disabledClass = clsx({
    'cursor-not-allowed': disabled,
    'bg-green': disabled && color === 'green' && variant === 'outlined',
    'bg-white': disabled && color === 'white' && variant === 'outlined',
    'bg-orange': disabled && color === 'orange' && variant === 'outlined',
    'opacity-90': disabled && variant === 'filled',
    'text-white': disabled && variant === 'outlined' && color !== 'white',
    'text-dark': disabled && variant === 'outlined' && color === 'white',
  });

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={clsx(
        bgClass,
        borderClass,
        hoverBgClass,
        textClass,
        hoverTextClass,
        sizeClass,
        disabledClass,
        'border-3 flex items-center rounded-full border font-acorn font-medium transition-all duration-300',
        className
      )}
    >
      {icon ? <span className={clsx(`mr-1`)}>{icon}</span> : null}
      <span>{children}</span>
    </button>
  );
}
