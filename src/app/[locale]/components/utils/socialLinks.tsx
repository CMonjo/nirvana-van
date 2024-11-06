import React, { useEffect, useState } from 'react';
import YouTubeIcon from '@mui/icons-material/YouTube';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import Link from 'next/link';
import LinkWrapper from './LinkWrapper';

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
      <LinkWrapper href='https://www.youtube.com/@nirvanavan' target='_blank'>
        <YouTubeIcon style={{ fontSize: fontSize.youtube }} />
      </LinkWrapper>
      <LinkWrapper
        href='https://www.facebook.com/people/Nirvana-van/100087201987137/'
        target='_blank'
      >
        <FacebookIcon style={{ fontSize: fontSize.facebook }} />
      </LinkWrapper>
      <LinkWrapper
        href='https://www.instagram.com/nirvanavan_/'
        target='_blank'
      >
        <InstagramIcon style={{ fontSize: fontSize.instagram }} />
      </LinkWrapper>
    </div>
  );
}
