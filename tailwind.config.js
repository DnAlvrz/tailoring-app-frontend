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
      'lato': ['Lato', 'sans-serif']
    },
    colors:{
      'primary': ['#FCFCFC'],
      'secondary': ['#474554'],
      'tertiary': ['#ACA7CB']
    },
    extend: {
      backgroundImage:{
        'shirt': "url('./src/assets/T-shirt.jpg')",
        'pants': "url('./src/assets/Pants.jpg')",
        'shorts': "url('./src/assets/Shorts.jpg')",
        'cloth': "url('./src/assets/cloth.jpg')",
      }
    },
  },
  plugins: [
    require('flowbite/plugin'),
  ]
};

