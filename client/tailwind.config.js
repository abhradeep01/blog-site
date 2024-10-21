/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    screens:{
      'x-sm':{'min':'0px',"max":"480px"},
      "mid":{'min':"0px",'max':"700px"},
      'tablet-lg':{min:'0px',max:'1024px'}
    },
    extend: {},
  },
  plugins: [],
}

