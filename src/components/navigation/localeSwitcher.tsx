'use client';

import { usePathname, useRouter } from '@/i18n/routing';
import { useTransition } from 'react';
import { useLocale } from 'next-intl';
import { localesName, Locale } from '@/i18n/routing';
import Select from '../atoms/select';
import LanguageIcon from '@mui/icons-material/Language';

export default function LocaleSwitcher({
  color = 'orange',
  size = 'medium',
}: {
  color?: 'orange' | 'green' | 'white';
  size?: 'small' | 'medium';
}) {
  const currentLocale = useLocale();
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const pathname = usePathname();

  function onSelectChange(nextLocale: string) {
    startTransition(() => {
      router.replace(pathname, { locale: nextLocale as Locale });
    });
  }

  return (
    <Select
      options={localesName}
      value={currentLocale}
      onChange={onSelectChange}
      color={color}
      variant='outlined'
      size={size}
      icon={<LanguageIcon sx={{ fontSize: size === 'small' ? 10 : 20 }} />}
    />
  );
}
