  // tailwind.config.js
  module.exports = {
    darkMode: 'class', // Enable dark mode support
    purge: [],
    purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
     theme: {
       extend: {},
     },
     variants: {
       extend: {},
     },
     
     plugins: [
      require("flyonui"),
      require("flyonui/plugin") // Require only if you want to use FlyonUI JS component
    ]
     
   }