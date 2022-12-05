/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./src/**/*.{html,js,jsx,tsx}",
    "./src/pages/**/*.{html,js,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        xs: [
          "0.8rem",
          {
            "line-height": "1rem",
          },
        ],
      },
      colors: {
        "off-white": "#EEEFFB",
        "off-black": "#0B0B0B",
        "modal-black-top": "#1E1E1E",
        "modal-black-bottom": "#100F0F",
        "bd-grey": "#292929",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
