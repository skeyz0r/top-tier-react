/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      borderRadius:{
        'rb': '5px 5px 50px 5px;'
      },
      gap:{
        '20p': '20%',
      },
      boxShadow:{
        'mainsh': '5px 5px 10px rgba(0, 0, 0, 0.123)',
        'line': '3px 3px 15px black',
        'card': '1px 2px 3px #333',
        'faint': '1px 2px 5px .2px #3333',
      },
      brightness:{
        '30': '0'
      },
      colors:{
        'navYellow': 'rgb(255,222,15)',
        'nvYlw':'rgba(216, 223, 10, 0.634);',
      },
      width:{
        'hd': '1920px',
        'k': '1000px',
        '500px': '500px',

      },
      height:{
        'hd': '1080px',
        'k': '1000px',
        '500px': '500px',
      },
      maxWidth:
      {
        'hd': '1920px',
      },
      maxHeight:{
        'hd': '1080px',
      },

      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
