module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: 'class', 
  theme: {
    extend: {
      fontFamily: {
        julius: ['Julius Sans One', 'sans-serif'],
      },
    },  
  },
  variants: {
    extend: {},
  },
  plugins: [],
}