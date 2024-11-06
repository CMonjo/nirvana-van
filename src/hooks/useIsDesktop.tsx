'use client';

import { useEffect, useState } from 'react';

export default function useIsDesktop(breakpoint: number = 767): boolean {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const mediaQueryList = window.matchMedia(`(max-width: ${breakpoint}px)`);
    const documentChangeHandler = () => setMatches(mediaQueryList.matches);

    mediaQueryList.addEventListener('change', documentChangeHandler);
    setMatches(mediaQueryList.matches);

    return () => {
      mediaQueryList.removeEventListener('change', documentChangeHandler);
    };
  }, [breakpoint]);

  return !matches;
}
