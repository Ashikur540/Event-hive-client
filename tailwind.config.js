/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: '2rem',
    },
    fontFamily: {
      inter: ['Inter', 'sans-serif'],

    },

    extend: {
      backgroundImage: {
        'sale-banner-bg': "url('/src/Assets/Photos/sale bg.png')",
        'blog-banner': "url('/src/Assets/Photos/blog banner.png')",
      },
      colors: {
        'white': '#ffffff',
        'dark': '#3B4949',
        'dark-toned': '#5a5858',
        'primary': '#5B9982',
        'red': '#DB2F06',
        'red-toned': '#FAE8E4',
        'snow-white': '#rgb(241,246,247)',
        'gray': '#8B928F',
        'gray-border': '#F2F2F2',


      }
    },
  },
  plugins: [],
}