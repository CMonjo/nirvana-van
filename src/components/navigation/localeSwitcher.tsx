'use client';

import clsx from 'clsx';
import { usePathname, useRouter } from '@/i18n/routing';
import { ChangeEvent, ReactNode, useTransition } from 'react';
import { useLocale } from 'next-intl';
import { localesName, Locale } from '@/i18n/routing';
import Select from '../atoms/select';
import LanguageIcon from '@mui/icons-material/Language';

type Props = {
  children: ReactNode;
  defaultValue: string;
  label: string;
};

function LocaleSwitcherSelect({ children, defaultValue, label }: Props) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const pathname = usePathname();

  function onSelectChange(event: ChangeEvent<HTMLSelectElement>) {
    const nextLocale = event.target.value as Locale;
    console.log('nextLocale', nextLocale);
    startTransition(() => {
      router.replace(pathname, { locale: nextLocale });
    });
  }

  return (
    <label
      className={clsx(
        'relative text-gray-400',
        isPending && 'transition-opacity [&:disabled]:opacity-30'
      )}
    >
      <p className='sr-only'>{label}</p>
      <select
        className='inline-flex appearance-none bg-transparent py-3 pl-2 pr-6'
        defaultValue={defaultValue}
        disabled={isPending}
        onChange={onSelectChange}
      >
        {children}
      </select>
      <span className='pointer-events-none absolute right-2 top-[8px]'>⌄</span>
    </label>
  );
}

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
    console.log('nextLocale', nextLocale as Locale);
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
