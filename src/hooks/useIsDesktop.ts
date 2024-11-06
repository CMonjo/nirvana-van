import { useState, useEffect } from 'react';

export default function useIsDesktop(breakpoint: number = 768): boolean {
  const [isDesktop, setIsDesktop] = useState<boolean>(
    window.innerWidth >= breakpoint
  );

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= breakpoint);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, [breakpoint]);

  return isDesktop;
}
