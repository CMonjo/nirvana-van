import localFont from 'next/font/local'
import { Inter } from 'next/font/google';

export const inter = Inter({ subsets: ['latin'] });

export const Kobe11 = localFont({
    src: [
      {
        path: '../fonts/kobe11-black.ttf',
        weight: '900',
        style: 'normal',
      },
      {
        path: '../fonts/kobe11-bold.ttf',
        weight: 'bold',
        style: 'normal',
      },
      {
        path: '../fonts/kobe11-regular.ttf',
        weight: '300',
        style: 'normal',
      },
    ],
  })

export const Acorn = localFont({
    src: [
      {
        path: '../fonts/Acorn-Bold.otf',
        weight: '700',
        style: 'normal',
      },
      {
        path: '../fonts/Acorn-ExtraLight.otf',
        weight: '300',
        style: 'normal',
      },
      {
        path: '../fonts/Acorn-Light.otf',
        weight: '300',
        style: 'normal',
      },
      {
        path: '../fonts/Acorn-Medium.otf',
        weight: '400',
        style: 'normal',
      },
      {
        path: '../fonts/Acorn-Regular.otf',
        weight: '400',
        style: 'normal',
      },
      {
        path: '../fonts/Acorn-SemiBold.otf',
        weight: '600',
        style: 'normal',
      },
      {
        path: '../fonts/Acorn-Thin.otf',
        weight: '100',
        style: 'normal',
      },
    ],
  })