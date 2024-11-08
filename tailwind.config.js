/** @type {import('tailwindcss').Config} */
module.exports = {
  content: []
  './pages/**/*.{html,js}',
  './components/**/*.{html,js}'],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light", "dark"],
    darkTheme: "dark",
    base: true,
    styled: true,
    utils: true,
    prefix: "",
    logs: true,
    themeRoot: ":root",
  },
}
