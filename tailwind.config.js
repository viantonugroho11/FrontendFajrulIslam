// const colors = require('tailwindcss/colors')

module.exports = {
  content: ["index.html", "./src/**/*.{js,jsx,ts,tsx,vue,html}"],
  theme: {
    extend: {
      colors: {
        base: "#2F313D",
        hover: "#81A084",
      },
      fontSize: {
        "2vw": [
          "2vw",
          {
            lineHeight: "1",
          },
        ],
        "7vw": [
          "7vw",
          {
            lineHeight: "1.2",
          },
        ],
      },
      maxWidth: {
        "8xl": "1366px",
      },
    },
  },
  plugins: [],
};
