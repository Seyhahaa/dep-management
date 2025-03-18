  // tailwind.config.js
  module.exports = {
    purge: [],
    purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
     theme: {
       extend: {},
     },
     variants: {
       extend: {},
     },
     flyonui: {
      themes: ["light", "dark", "gourmet"]
    },
     plugins: [
      require("flyonui"),
      require("flyonui/plugin") // Require only if you want to use FlyonUI JS component
    ]
     
   }