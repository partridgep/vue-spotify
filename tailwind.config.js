module.exports = {
  purge: ["./src/**/*.html", "./src/**/*.vue"],
  theme: {
    fontFamily: "Proxima Nova",
    container: {
      center: true
    },
    extend: {
      colors: {
        green: "#1DB954",
        dark: "#121212",
        light: "#282828",
        lightest: "#B3B3B3",
        darkest: "#191414"
      }
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      xxl: "1536px"
    }
  },
  variants: {},
  plugins: [require("@tailwindcss/line-clamp")]
};
