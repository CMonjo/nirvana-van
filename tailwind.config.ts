import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    borderWidth: {
      DEFAULT: '1px',
      '0': '0',
      '2': '2px',
      '4': '4px',
      '6': '6px',
      '8': '8px',
    },
    extend: {
      fontFamily: {
        // tartuffo: ['var(--font-tartuffo)'],
        // gustavo: ['var(--font-gustavo)'],
        acorn: ['var(--font-acorn)'],
        kobe11: ['var(--font-kobe11)'],
      },
      colors: {
        'fg-1': '#30171B',
        'fg-2': '#5D4043',
        'fg-3': '#816A6C',
        'bg-2': '#FAF6F3',
        'bg-3': '#EBE0D8',
        'bg-blue': '#EFF1FD',

        orange: '#F2712A',
        greyDark: '#D9D9D9',
        green: '#00B291',
        dark: '#1A1A1A',
        'dark-lighter': '#212121',
        grey: '#F5F5F5',
      },
      fontSize: {
        xxs: ['9px', '11.7px'],
        base: ['15px', '18.75px'],
      },
    },
  },
  plugins: [],
};
export default config;
