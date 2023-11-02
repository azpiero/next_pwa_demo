import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black900: '#212121',
      black800: '#424242',
      black700: '#616161',
      gray400: '#BDBDBD',
      gray300: '#E0E0E0',
      gray200: '#EEEEEE',
      white: '#FFFFFF',
      red100: 'DC3545',
      blue100: '#0D6EfF',
      green100: '#00796B',
      bg: '#F2F7FF',
      modal: 'rgba(66, 66, 66, 0.4)',
    },
  },
  plugins: [],
};
export default config;
