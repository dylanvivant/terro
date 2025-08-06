/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}', './node_modules/flowbite/**/*.js'],
  theme: {
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
        'Inter': ['Inter', 'sans-serif'],
      },
      fontSize: {
        p: {
            large: '20px',
            medium: '16px',
            small: '12px',
        },
        h: {
          1: '57px',
          2: '44px',
          3: '40px',
          4: '36px',
          5: '32px'
        },
        hSmall: {
            1: '44px',
            2: '36px',
            3: '32px',
            4: '28px',
            5: '24px'
        }
      },
    },
  },
  plugins: [
    // Note: Si vous n'utilisez pas Flowbite, vous pouvez supprimer cette ligne
    // require('flowbite/plugin')({
    //   charts: true,
    // }),
  ],
}
