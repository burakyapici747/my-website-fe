/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      rotate: {
        '20': '20deg',
      },
    },
    container: {
      center: true,
      padding: '1rem',
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        xxl: '1536px',
      }
    },
    height:{
      '100px': '100px',
    },
    width:{
      '100px': '100px',
    },
    fontSize:{
      'text-xsm': '0.6rem',
    },
  },
  plugins: [],
}