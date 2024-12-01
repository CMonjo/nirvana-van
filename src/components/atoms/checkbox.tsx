import React from 'react';
import clsx from 'clsx';
import CheckIcon from '@mui/icons-material/Check';
import Typography from './typography';

export default function Checkbox({
  checked = false,
  color = 'orange',
  disabled = false,
  className,
  label,
  onChange,
}: {
  checked?: boolean;
  color?: 'green' | 'orange';
  label?: string;
  disabled?: boolean;
  className?: string;
  onChange?: (checked: boolean) => void;
}) {
  const bgClass = clsx({
    'bg-green': checked && color === 'green',
    'bg-orange': checked && color === 'orange',
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
      className='flex cursor-pointer items-center gap-1'
      onClick={() => {
        if (!disabled && onChange) onChange(!checked);
      }}
    >
      <div
        className={clsx(
          'flex h-5 w-5 items-center justify-center rounded-sm border-2 p-1 transition-all duration-300',
          bgClass,
          borderClass,
          cursorClass,
          disabledClass,
          className
        )}
      >
        {checked && <CheckIcon fontSize='small' className=' text-white' />}
      </div>
      {label && (
        <Typography variant='caption2' className='text-dark-lighter'>
          {label}
        </Typography>
      )}
    </div>
  );
}
