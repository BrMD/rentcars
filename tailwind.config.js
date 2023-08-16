/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,tsx,jsx,ts}", "./components/**/*.tsx"],
  theme: {
    extend: {},
  },
  plugins: [],
};
//npx tailwindcss -i ./src/index.css -o ./dist/output.css --watch
