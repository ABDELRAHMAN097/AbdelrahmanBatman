/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#FF00EA', // مثال على لون ثابت
        secondary: '#1C1C1C',
        accent: '#00FFD5',
      },
    },
  },
  plugins: [],
};
