module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'login-background': "url('/images/login-bg.png')",
      },
      fontFamily: {
        Nunito: ["Nunito", "sans"],
        Roboto: ["Roboto", "cursive"]
      },
      colors:{
        'bg-red': '#EF2020',
      }
    },
  },
  plugins: [],
}
