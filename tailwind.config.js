/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        "card-payment": "rgba(255, 255, 255, 0.25)",
        "extra-payment": "rgba(255, 255, 255, 0.5)",
        "bd-payment": "rgba(0, 0, 0, 0.55)",
      },
      dropShadow: {
        card: "0 4px 4px rgba(0, 0, 0, 0.25)",
      },
    },
  },
  plugins: [require("tw-elements/dist/plugin")],
};
