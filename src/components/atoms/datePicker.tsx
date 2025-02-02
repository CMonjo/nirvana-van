'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import clsx from 'clsx';

export default function DatePicker({
  label,
  className,
  color = 'orange',
  required = false,
  value,
  onChange,
  min = new Date().toISOString().split('T')[0],
  max = new Date(new Date().setFullYear(new Date().getFullYear() + 100))
    .toISOString()
    .split('T')[0],
  ...props
}: {
  label?: string;
  color?: 'orange' | 'green';
  required?: boolean;
  value?: string;
  onChange?: (value: string) => void;
  min?: string;
  max?: string;
} & Omit<React.InputHTMLAttributes<HTMLInputElement>, 'onChange'>) {
  const [isFocused, setIsFocused] = useState(false);

  const borderClass = clsx({
    'focus:border-green': color === 'green',
    'focus:border-orange': color === 'orange',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;

    onChange?.(newValue);
    if (newValue) {
      const inputDate = new Date(newValue);
      const minDate = new Date(min);
      const maxDate = new Date(max);
      if (inputDate < minDate || inputDate > maxDate) {
        console.warn('Date hors limites');
      }
    }
  };

  return (
    <div className={`relative w-full ${className || ''}`}>
      {label && (
        <motion.label
          htmlFor={props.id}
          className={`pointer-events-none absolute left-3 top-2 ${
            isFocused ? `text-white bg-${color}` : 'text-gray-500'
          } rounded-xl px-2 transition-all`}
          initial={{ scale: 1 }}
          animate={{
            scale: isFocused || !!value ? 0.75 : 1,
            x: 0,
            y: isFocused || !!value ? -10 : 0,
          }}
          style={{
            transformOrigin: 'left top',
            top: isFocused || !!value ? 0 : '50%',
            translateY: isFocused || !!value ? 0 : '-50%',
          }}
          transition={{ duration: 0.2, ease: 'easeInOut' }}
        >
          {label}
          {required && (
            <span className={`${isFocused ? 'text-white' : 'text-red-500'}`}>
              *
            </span>
          )}
        </motion.label>
      )}
      <input
        type='date'
        value={value}
        onChange={handleChange}
        min={min}
        max={max}
        {...props}
        className={clsx(
          'w-full rounded-3xl border-2 border-grey px-3 py-2 transition-colors duration-300 ease-in-out focus:outline-none focus:ring-0',
          borderClass,
          'placeholder-transparent',
          !value &&
            !isFocused &&
            '[&::-webkit-datetime-edit-fields-wrapper]:invisible',
          !value && '[&::-webkit-calendar-picker-indicator]:opacity-100'
        )}
        onFocus={() => setIsFocused(true)}
        onBlur={(e) => setIsFocused(!!e.target.value)}
      />
    </div>
  );
}
