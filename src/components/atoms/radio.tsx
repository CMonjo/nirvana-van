import React from 'react';
import clsx from 'clsx';
import Typography from './typography';

export default function Radio({
  checked = false,
  disabled = false,
  color = 'orange',
  className,
  label,
  onChange,
}: {
  checked?: boolean;
  disabled?: boolean;
  color?: 'green' | 'orange';
  className?: string;
  label?: string;
  onChange?: () => void;
}) {
  const bgClass = clsx({
    'bg-green': color === 'green' && checked,
    'bg-orange': color === 'orange' && checked,
    'bg-transparent': !checked,
  });

  const borderClass = clsx({
    'border-green': color === 'green',
    'border-orange': color === 'orange',
    'border-gray-300': !checked,
  });

  const cursorClass = clsx({
    'cursor-pointer': !disabled,
    'cursor-not-allowed': disabled,
  });

  const disabledClass = clsx({
    'opacity-50': disabled,
  });

  return (
    <div
      onClick={() => {
        if (!disabled && onChange) onChange();
      }}
      className={clsx(
        'flex items-center gap-1',
        cursorClass,
        disabledClass,
        className
      )}
    >
      <div
        className={clsx(
          'flex h-5 w-5 items-center justify-center rounded-full border transition-all duration-300',
          bgClass,
          borderClass
        )}
      >
        {checked && <div className='h-2.5 w-2.5 rounded-full bg-white'></div>}
      </div>

      {label && (
        <Typography
          variant='caption2'
          className={clsx(
            'transition-colors duration-300',
            checked ? 'text-dark-lighter' : 'text-gray-500'
          )}
        >
          {label}
        </Typography>
      )}
    </div>
  );
}
