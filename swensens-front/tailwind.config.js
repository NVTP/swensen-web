/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      extend: {
        fontFamily: {
          sans: [
            "SF-Pro-Display-Regular",
            "SF-Pro-Display-Light",
            "SF-Pro-Display-Bold",
            "SFProTH_regular",
          ],
        },

        // that is animation class
        animation: {
          fadeIn: "fadeIn .5s ease-in-out",
          fadeOut: "fadeOut 1s ease-in-out",
        },

        // that is actual animation
        keyframes: {
          fadeIn: {
            "0%": { opacity: 0 },
            "100%": { opacity: 1 },
          },
          fadeOut: {
            "0%": { opacity: 1 },
            "100%": { opacity: 0 },
          },
        },
      },
      colors: {
        primary: "#e21c23",
        primarySecond: "#cb191f",
        pinkBang: "#ff807c",
        pink: "#fd4b47",
      },
    },
  },
  plugins: [],
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
};
