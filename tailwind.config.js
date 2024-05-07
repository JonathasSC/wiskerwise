/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  media: false,
  theme: {
    extend: {
      fontFamily: {
        mohave: ["Mohave"],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
