module.exports = {
  content: ["./src/**/*.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily:{
        poppins:['Poppins', "sans-serif"],
        noto:["Noto Sans", "sans-serif"]
      },
      boxShadow:{
        "cardShadow":" 0px 4px 12px rgba(0, 0, 0, 0.1)"
      },
      fontSize:{
        xxs:"10px"
      },
      colors:{
        "gray-2":"#4F4F4F",
        "gray-3":"#828282",
        "gray-4":"#BDBDBD",
        "footer":"#A9A9A9",
        "light-blue":"#97BEF4",
      },
      backgroundColor:{
        "main":"#FAFAFB",
        "drag&drop":"#F6F8FB",
        "blue-1":"#2F80ED"
      },
      width:{
        "card":"402px"
      },
      height:{
        "card":"469px"
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
