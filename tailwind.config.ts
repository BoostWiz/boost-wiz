import type { Config } from 'tailwindcss';

export default {
  darkMode: ['class'],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/shared/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        mainfont: ['var(--font-spotlight)'],
      },
      colors: {
        darkBrown: '#231F20',
        charcoal: '#35383E',
        lightGray: '#ECEEF2',
        slateGray: '#717781',
        turquoise: '#0098AF',
        brightRed: '#EA0101',
        crimsonRed: '#D60C0C',
        fireEngineRed: '#F53232',
        deepBrown: '#272222',
        black: '#000000',
        nearBlack: '#010101',
        charcoalBlack: '#111111',
        jetBlack: '#171717',
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
} satisfies Config;
