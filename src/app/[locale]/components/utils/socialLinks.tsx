// 'use client';
import React, { useEffect, useMemo, useState } from 'react';
import YouTubeIcon from '@mui/icons-material/YouTube';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import Link from 'next/link';

const sizes = [
  {
    size: 'small',
    youtube: 28,
    facebook: 24,
    instagram: 24,
  },
  {
    size: 'medium',
    youtube: 46,
    facebook: 38,
    instagram: 38,
  },
];

const className = 'transition-all duration-300 hover:opacity-70';

export default function SocialLinks({
  size = 'small',
  color = 'black',
}: {
  size?: 'small' | 'medium';
  color?: string;
}) {
  const [fontSize, setFontSize] = useState<any>(sizes[0]);

  useEffect(() => {
    if (!size) return;
    setFontSize(sizes.find((s) => s.size === size));
  }, [size]);

  return (
    <div className={`flex items-center justify-center gap-4 text-${color}`}>
      <Link
        href='https://www.youtube.com/@nirvanavan'
        target='_blank'
        className={className}
      >
        <YouTubeIcon style={{ fontSize: fontSize.youtube }} />
      </Link>
      <Link
        href='https://www.facebook.com/people/Nirvana-van/100087201987137/'
        target='_blank'
        className={className}
      >
        <FacebookIcon style={{ fontSize: fontSize.facebook }} />
      </Link>
      <Link
        href='https://www.instagram.com/nirvanavan_/'
        target='_blank'
        className={className}
      >
        <InstagramIcon style={{ fontSize: fontSize.instagram }} />
      </Link>
    </div>
  );
}
