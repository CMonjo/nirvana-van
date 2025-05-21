import React, { useState } from 'react';
import Typography from '@/components/atoms/typography';
import { useTranslations } from 'next-intl';
import Modal from '@/components/utils/modal';
import SocialLinks from '@/components/utils/socialLinks';
import * as envConfig from '@/config';

export default function ConfirmationModal({
  open,
  onClose,
  title,
}: {
  open: boolean;
  onClose: () => void;
  title: string;
}) {
  const tPage = useTranslations('forms.status');
  return (
    <Modal isOpen={open} onClose={onClose} title={title}>
      <div className='flex flex-col justify-center gap-4'>
        <Typography variant='body1' className='text-center'>
          {`${tPage('spam')} ${envConfig.mailContact}`}
        </Typography>
        <SocialLinks />
      </div>
    </Modal>
  );
}
