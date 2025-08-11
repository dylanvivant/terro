/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
      '3xl': '1920px',
      '4xl': '2560px',
      '5xl': '3840px',
    },
    extend: {
      colors: {
        primary: {
          vert: '#2D5930',
          vertClair: '#7FB069',
          orange: '#C67E39',
          blanc: '#F8F9FA',
        },
        secondary: {
          vert: '#4A7C59',
          vertClair: '#A0C4A7',
          bleu: '#4682B4',
        },
        tertiary: {
          brun: '#8B6F47',
        },
      },
      fontFamily: {
        Inter: ['Inter', 'sans-serif'],
      },
      fontSize: {
        'p-large': '20px',
        'p-medium': '16px',
        'p-small': '12px',
        'h-1': '57px',
        'h-2': '44px',
        'h-3': '40px',
        'h-4': '36px',
        'h-5': '32px',
        'hSmall-1': '44px',
        'hSmall-2': '40px',
        'hSmall-3': '30px',
        'hSmall-4': '28px',
        'hSmall-5': '24px',
      },
      spacing: {
        18: '4.5rem',
        88: '22rem',
        128: '32rem',
      },
    },
  },
  plugins: [],
}
