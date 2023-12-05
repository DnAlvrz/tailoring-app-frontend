/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    fontFamily:{
      'roboto': ['Roboto', 'sans-serif'],
    },
    colors:{
      'primary': ['#FCFCFC'],
      'secondary': ['#474554'],
      'tertiary': ['#ACA7CB'],
      'quaternary': ['#FF00EA']
    },
    extend: {},
  },
  plugins: [
    require('flowbite/plugin')
  ]
};

