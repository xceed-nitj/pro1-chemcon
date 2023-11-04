/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        wiggle: {
          '0%,100%': { transform: 'traslateY(0%)' },
          '50%': { transform: 'translateY(-100%)' },


        }
      },
      animation:{
        wiggle: 'wiggle 30s linear infinite',
        'ping-slow': 'ping 1.5s linear infinite',


      }

    },
  },
  plugins: [],
};
