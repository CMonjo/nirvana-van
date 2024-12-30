import localFont from 'next/font/local';

export const kobe11 = localFont({
  variable: '--font-kobe11',
  display: 'swap',
  preload: true,
  src: [
    {
      path: './fonts/kobe11-black.ttf',
      weight: '900',
      style: 'normal',
    },
    {
      path: './fonts/kobe11-black.ttf',
      weight: '800',
      style: 'normal',
    },
    {
      path: './fonts/kobe11-black.ttf',
      weight: '700',
      style: 'normal',
    },
    {
      path: './fonts/kobe11-bold.ttf',
      weight: '600',
      style: 'normal',
    },
    {
      path: './fonts/kobe11-bold.ttf',
      weight: '500',
      style: 'normal',
    },
    {
      path: './fonts/kobe11-bold.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: './fonts/kobe11-regular.ttf',
      weight: '300',
      style: 'normal',
    },
    {
      path: './fonts/kobe11-regular.ttf',
      weight: '200',
      style: 'normal',
    },
    {
      path: './fonts/kobe11-regular.ttf',
      weight: '100',
      style: 'normal',
    },
  ],
});

export const acorn = localFont({
  variable: '--font-acorn',
  display: 'swap',
  preload: true,
  src: [
    {
      path: './fonts/Acorn-Bold.otf',
      weight: '700',
      style: 'normal',
    },
    {
      path: './fonts/Acorn-SemiBold.otf',
      weight: '600',
      style: 'normal',
    },
    {
      path: './fonts/Acorn-Medium.otf',
      weight: '500',
      style: 'normal',
    },
    {
      path: './fonts/Acorn-Regular.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: './fonts/Acorn-Light.otf',
      weight: '300',
      style: 'normal',
    },
    {
      path: './fonts/Acorn-ExtraLight.otf',
      weight: '200',
      style: 'normal',
    },
    {
      path: './fonts/Acorn-Thin.otf',
      weight: '100',
      style: 'normal',
    },
  ],
});
