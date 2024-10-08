/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: "475px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1440px",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
        },
      },
      colors: {
        trafficWhite: "#F7F8F7",
        titleColor: "#221A25",
        greenColor: "#55C380",
        textColor: "#99969A",
        pureGreen: "#0CA145",
        limeGreen: "#2CDF70",
      },
      backgroundImage: {
        cardHover: "linear-gradient(360deg, rgba(0, 0, 0, 0.4) 27%, rgba(0, 0, 0, 0) 100%)",
      },
    },
  },
  plugins: [],
});
