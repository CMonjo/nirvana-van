'use client';
import { ReactNode, useState } from 'react';

export default function Tooltip({
  content,
  children,
  position = 'top',
}: {
  content: string;
  children: ReactNode;
  position?: 'top' | 'bottom' | 'left' | 'right';
}) {
  const [isVisible, setIsVisible] = useState(false);

  const positionClass = {
    top: 'bottom-full left-1/2 transform -translate-x-1/2 mb-2',
    bottom: 'top-full left-1/2 transform -translate-x-1/2 mt-2',
    left: 'right-full top-1/2 transform -translate-y-1/2 mr-2',
    right: 'left-full top-1/2 transform -translate-y-1/2 ml-2',
  };

  if (content === '') {
    return children;
  }

  return (
    <div
      className='relative inline-block'
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
    >
      <div
        className={`absolute whitespace-nowrap rounded bg-dark-lighter px-2 py-1 text-xs text-white ${positionClass[position]} z-10 transition-all duration-200 ${
          isVisible
            ? 'translate-y-0 scale-100 opacity-100'
            : 'translate-y-2 scale-95 opacity-0'
        }`}
      >
        {content}
      </div>
      {children}
    </div>
  );
}
