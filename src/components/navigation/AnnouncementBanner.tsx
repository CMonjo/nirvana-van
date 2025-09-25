'use client';
import React, { useState, useEffect } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '../atoms/typography';
import Image from 'next/image';
import Link from 'next/link';
import bannerMessage from '@/utils/bannerMessage';

interface BannerProps {
  height?: string;
  closeable?: boolean;
  imageUrl?: string;
  imageAlt?: string;
  imageWidth?: number;
  imageHeight?: number;
  link?: string;
}

const AnnouncementBanner = ({
  closeable = false,
  imageUrl,
  imageAlt,
  imageWidth = 24,
  imageHeight = 24,
  link,
}: BannerProps) => {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const isDismissed =
      window?.localStorage?.getItem(`banner_dismissed_${bannerMessage}`) ||
      !bannerMessage;
    if (isDismissed) {
      setShow(false);
    }
  }, []);

  const handleClose = () => {
    setShow(false);
    window?.localStorage.setItem(`banner_dismissed_${bannerMessage}`, 'true');
  };

  if (!show) return null;

  return (
    <div
      className={`fixed top-0 z-[60] flex w-full items-center justify-center bg-orange`}
    >
      <div
        className={`relative flex h-10 w-full max-w-7xl items-center justify-center px-6`}
      >
        <Link href={link || ''}>
          <div className='flex items-center gap-2'>
            {imageUrl && (
              <Image
                src={imageUrl}
                alt={imageAlt || 'Banner image'}
                width={imageWidth}
                height={imageHeight}
                className='object-contain'
              />
            )}
            <Typography
              variant='body2'
              className={`text-center text-white ${link ? 'underline' : ''}`}
            >
              {bannerMessage}
            </Typography>
          </div>
        </Link>
        {closeable && (
          <button
            onClick={handleClose}
            className={`absolute right-6 text-white transition-opacity hover:opacity-70`}
            aria-label='Fermer la bannière'
          >
            <CloseIcon fontSize='small' />
          </button>
        )}
      </div>
    </div>
  );
};

export default AnnouncementBanner;
