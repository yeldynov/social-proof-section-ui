/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'magenta-dark': 'hsl(300, 43%, 22%)',
        'pink-soft': 'hsl(333, 80%, 67%)',
        'gray-magenta': 'hsl(303, 10%, 53%)',
        'gray-magenta-light': 'hsl(300, 24%, 96%)',
        'white-custom': 'hsl(0,0%,100%)',
      },
      fontSize: {
        base: ['15px', '28px'],
      },
      fontFamily: {
        leaguespartan: ['League Spartan', 'sans-serif'],
      },
      backgroundImage: {
        'bg-mob-bottom': "url('/src/assets/bg-pattern-bottom-mobile.svg')",
        'bg-mob-top': "url('/src/assets/bg-pattern-top-mobile.svg')",
        'bg-desk-bottom': "url('/src/assets/bg-pattern-bottom-desktop.svg')",
        'bg-desk-top': "url('/src/assets/bg-pattern-top-desktop.svg')",
      },
    },
    screens: {
      mob: '375px',
    },
  },
  plugins: [],
};
