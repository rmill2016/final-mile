/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    screens: {
      sm: '576px',
      md: '768px',
      lg: '992px',
      xl: '1440px',
    },
    extend: {
      colors: {
        primary: '#6E0207',
        secondary: '#0E3D78',
        white: '#FFF',
        black: '#000',
        shadow: 'rgba(0,0,0,0.8)',
      },
      zIndex: {
        '-5': '-5',
        '-4': '-4',
        '-3': '-3',
        '-2': '-2',
        '-1': '-1',
        1: '1',
        2: '2',
        3: '3',
        4: '4',
        5: '5',
      },
      height: {
        vh: 'var(--vh)',
        dvh: '100dvh',
        lvh: '100lvh',
        svh: '100svh',
      },
      minHeight: {
        vh: 'var(--vh)',
      },
    },
  },
  plugins: [],
}
