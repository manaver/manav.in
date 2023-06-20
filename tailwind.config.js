module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: 'class', 
  theme: {
    extend: {
      fontFamily: {
        julius: ['Julius Sans One', 'sans-serif'],
      },
      colors: {
        'light': '#B8D9BB',
        'dark': '#262E30',
      },
    },  
  },
  variants: {
    extend: {},
  },
  plugins: [],
}