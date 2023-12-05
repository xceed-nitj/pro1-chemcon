/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        accent: {
          50: "hsl(26, 89%, 96%)",
          100: "hsl(27, 86%, 92%)",
          200: "hsl(24, 86%, 83%)",
          300: "hsl(23, 84%, 72%)",
          400: "hsl(19, 84%, 61%)",
          500: "hsl(17, 83%, 54%)",
          600: "hsl(12, 79%, 48%)",
          700: "hsl(10, 78%, 40%)",
          800: "hsl(7, 69%, 34%)",
          900: "hsl(7, 65%, 28%)",
          950: "hsl(5, 70%, 15%)",
        },
      },
      keyframes: {
        wiggle: {
          "0%,100%": { transform: "traslateY(0%)" },
          "50%": { transform: "translateY(-100%)" },
        },
      },
      animation: {
        wiggle: "wiggle 30s linear infinite",
        "ping-slow": "ping 1.5s linear infinite",
      },
    },
  },
  plugins: [],
};
