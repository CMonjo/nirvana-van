'use client';

import clsx from 'clsx';
import { usePathname, useRouter } from '@/i18n/routing';
import { ChangeEvent, ReactNode, useTransition } from 'react';
import { useLocale } from 'next-intl';
import { routing, localesName, Locale } from '@/i18n/routing';

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
export default function LocaleSwitcher() {
  const currentLocale = useLocale();

  return (
    <LocaleSwitcherSelect
      defaultValue={currentLocale}
      //   @ts-ignore
      label={localesName[currentLocale]}
    >
      {routing.locales.map((cur) => (
        <option key={cur} value={cur}>
          {localesName[cur]}
        </option>
      ))}
    </LocaleSwitcherSelect>
  );
}
