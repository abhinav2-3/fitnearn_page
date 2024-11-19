/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        brown: "#171717",
      },
      textColor: {
        primary_white: "#F5F5F5",
        secondary_white: "#D4D4D4",
      },
      backgroundImage: {
        "hero-pattern": "url('/images/2circle.png')",
      },
    },
  },
  plugins: [],
};
