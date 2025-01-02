import type { Config } from 'tailwindcss';

export default {
  darkMode: ['class'],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/shared/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        mainfont: ['var(--font-spotlight)'],
      },
      fontSize: {
        title: ['30px', { lineHeight: '1.2', fontWeight: '700' }], // 큰 제목
        xl: ['24px', { lineHeight: '1.3', fontWeight: '600' }], // 중간 제목
        lg: ['20px', { lineHeight: '1.4', fontWeight: '500' }], // 본문 강조
        md: ['16px', { lineHeight: '1.5', fontWeight: '400' }], // 일반 본문
        sm: ['14px', { lineHeight: '1.6', fontWeight: '400' }], // 부가 설명
        xs: ['12px', { lineHeight: '1.6', fontWeight: '400' }], // 세부 설명
        caption: ['10px', { lineHeight: '1.8', fontWeight: '400' }], // 캡션
      },
      colors: {
        primary: '#EA0101',
        darkBrown: '#231F20',
        charcoal: '#35383E',
        gray: '#999999',
        lightGray: '#ECEEF2',
        slateGray: '#717781',
        turquoise: '#0098AF',
        crimsonRed: '#D60C0C',
        fireEngineRed: '#F53232',
        deepBrown: '#272222',
        black: '#000000',
        nearBlack: '#010101',
        charcoalBlack: '#111111',
        jetBlack: '#171717',
        white: '#FFFFFF',
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      backgroundImage: {
        'gradient-custom':
          'linear-gradient(110deg, #f53232 6%, #cc65de 46%, #2ab2c6 84%)',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
} satisfies Config;
