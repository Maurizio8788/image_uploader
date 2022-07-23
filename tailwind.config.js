module.exports = {
  content: ["./src/**/*.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily:{
        sans:['Poppins', "sans-serif"]
      },
      boxShadow:{
        "cardShadow":" 0px 4px 12px rgba(0, 0, 0, 0.1)"
      },
      fontSize:{
        xxs:"10px"
      },
      colors:{
        "gray-2":"#4F4F4F",
        "gray-3":"#828282"
      },
      backgroundColor:{
        "main":"#FAFAFB",
        "drag&drop":"#F6F8FB",
        "light-blue":"#97BEF4"
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
