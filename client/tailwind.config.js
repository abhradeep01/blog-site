/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    screens:{
      'x-sm':{'min':'0px','max':'480px'},
      'tablet-sm':{'min':'480px','max':'700px'},
      'tablet-lg':{'min':'701px','max':'1024px'}
    },
    extend: {},
  },
  plugins: [],
}

