'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import clsx from 'clsx';

export default function Textarea({
  label,
  className,
  color = 'orange',
  required = false,
  ...props
}: {
  label?: string;
  color?: 'orange' | 'green';
  required?: boolean;
} & React.TextareaHTMLAttributes<HTMLTextAreaElement>) {
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
          className={`pointer-events-none absolute left-3 top-2 ${isFocused ? `text-white bg-${color}` : 'text-gray-500'} rounded-xl px-2 transition-all`}
          initial={{ scale: 1 }}
          animate={{
            scale: isFocused || !!props.value ? 0.75 : 1,
            x: 0,
            y: isFocused || !!props.value ? -10 : 0,
          }}
          style={{
            transformOrigin: 'left top',
            top: isFocused || !!props.value ? 0 : 30,
            translateY: isFocused || !!props.value ? 0 : '-50%',
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
      <textarea
        {...props}
        className={clsx(
          'w-full resize-none rounded-3xl border-2 border-grey px-3 py-2 transition-colors duration-300 ease-in-out focus:outline-none focus:ring-0',
          borderClass
        )}
        onFocus={() => setIsFocused(true)}
        onBlur={(e) => setIsFocused(!!e.target.value)}
      />
    </div>
  );
}
