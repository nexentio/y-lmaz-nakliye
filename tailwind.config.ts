import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#1a0502',
        textGray: 'rgba(255, 255, 255, 0.5)',
        borderGray: 'rgba(255, 255, 255, 0.1)',
        accent: '#F94006',
        accentHover: '#d63604',
        surface: 'rgba(28, 24, 23, 0.6)',
      },
    },
  },
  plugins: [],
};
export default config;

