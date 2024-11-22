'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import clsx from 'clsx';

export default function Input({
  label,
  className,
  color = 'orange',
  ...props
}: {
  label?: string;
  color?: 'orange' | 'green';
} & React.InputHTMLAttributes<HTMLInputElement>) {
  const [isFocused, setIsFocused] = useState(false);

  const borderClass = clsx({
    'focus:border-green': color === 'green',
    'focus:border-orange': color === 'orange',
  });

  return (
    <div className={`relative w-full ${className || ''}`}>
      {label && (
        <motion.label
          htmlFor={props.id}
          className={`pointer-events-none absolute left-3 top-2 ${isFocused ? `text-white bg-${color}` : 'text-gray-500'} rounded-xl  px-2 transition-all`}
          initial={{ y: 0, x: 0, scale: 1 }}
          animate={
            isFocused || !!props.value
              ? { x: -12, y: -20, scale: 0.6 }
              : { y: 0, scale: 1 }
          }
          transition={{ duration: 0.2, ease: 'easeInOut' }}
        >
          {label}
        </motion.label>
      )}
      <input
        {...props}
        className={clsx(
          'w-full rounded-3xl border-2 border-grey px-3 py-2 transition-colors duration-300 ease-in-out focus:outline-none focus:ring-0',
          borderClass
        )}
        onFocus={() => setIsFocused(true)}
        onBlur={(e) => {
          setIsFocused(!!e.target.value);
        }}
      />
    </div>
  );
}
