import React, { useRef } from 'react';
import clsx from 'clsx';

export default function Select({
  options,
  onChange,
  value,
  className,
  icon,
  color = 'orange',
  variant = 'filled',
  size = 'medium',
}: {
  options: { label: string; value: string }[];
  onChange?: (value: string) => void;
  value?: string;
  className?: string;
  icon?: React.ReactNode;
  color?: 'white' | 'orange' | 'green';
  variant?: 'filled' | 'outlined';
  size?: 'small' | 'medium';
}) {
  const selectRef = useRef<HTMLSelectElement>(null);

  const handleClick = () => {
    if (selectRef.current) {
      selectRef.current.focus();
      selectRef.current.click();
    }
  };

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

  const hoverBgClass = clsx({
    'hover:bg-green': color === 'green' && variant === 'outlined',
    'hover:bg-white': color === 'white' && variant === 'outlined',
    'hover:bg-orange': color === 'orange' && variant === 'outlined',
    'hover:opacity-80': variant === 'filled',
  });

  const hoverTextClass = clsx({
    'hover:text-white': variant === 'outlined',
    'hover:text-dark': variant === 'outlined' && color === 'white',
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

  const sizeClass = clsx({
    'text-xs px-3 py-1 pr-6': size === 'small',
    'text-sm px-5 py-2 pr-6': size === 'medium',
  });

  const selectedLabel = options.find((opt) => opt.value === value)?.label;
  console.log('select', selectedLabel);
  return (
    <div
      className={clsx(
        bgClass,
        borderClass,
        hoverBgClass,
        textClass,
        hoverTextClass,
        sizeClass,
        'border-3 relative flex cursor-pointer items-center rounded-full font-acorn text-sm font-medium transition-all duration-300',
        className
      )}
      onClick={handleClick}
    >
      {icon && <span className='mr-2 flex items-center'>{icon}</span>}
      <span>{selectedLabel}</span>
      <span className='absolute right-1.5 flex items-center'>
        <svg
          className='h-4 w-4'
          viewBox='0 0 20 20'
          fill='currentColor'
          aria-hidden='true'
        >
          <path d='M7 7l3-3 3 3m0 6l-3 3-3-3' />
        </svg>
      </span>
      <select
        value={value}
        onChange={(e) => onChange && onChange(e.target.value)}
        ref={selectRef}
        className='absolute inset-0 cursor-pointer opacity-0'
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}
