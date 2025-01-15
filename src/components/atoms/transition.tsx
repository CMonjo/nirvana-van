'use client';

import { motion } from 'framer-motion';
import React, { useState } from 'react';

export default function Transition({
  children,
}: {
  children: React.ReactNode;
}) {
  const [hasAnimated, setHasAnimated] = useState(false);

  return (
    <motion.div
      initial={{ y: -20, opacity: 0 }}
      animate={hasAnimated ? { opacity: 1, y: 0 } : undefined}
      whileInView={!hasAnimated ? { opacity: 1, y: 0 } : undefined}
      onViewportEnter={() => {
        if (!hasAnimated) {
          setHasAnimated(true);
        }
      }}
      transition={{ ease: 'easeInOut', duration: 0.75 }}
    >
      {children}
    </motion.div>
  );
}
