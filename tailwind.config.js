/** @type {import('tailwindcss').Config} */
import plugin from "tailwindcss/plugin";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      gridTemplateColumns: {
        14: "repeat(14, minmax(0, 1fr))",
      },
      animation: {
        "loop-scroll": "loop-scroll 10s linear infinite",
      },
      keyframes: {
        "loop-scroll": {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(calc(-50% - 4px))" },
        },
      },
      colors: {
        main: {
          1: "#43C2E8",
        },
        dark: {
          1: "#616161",
          2: "#212121",
          3: "#272422",
          4: "#1a1816",
          5: "#34302d",
        },
        light: {
          1: "#EEEEEE",
          2: "#E1E1E1",
          3: "#C2BDB7",
        },
        mac: {
          1: "#9AA3A7",
          2: "#424242",
          3: "#3C3C3C",
          4: "#7F8587",
        },
        dots: {
          1: "#5FCD37",
          2: "#E3DF61",
          3: "#D56060",
        },
      },
      fontFamily: {
        mainfont: ["main-font", "sans-serif"],
      },
      backgroundImage: {
        "radial-gradient-white-weak":
          "radial-gradient(circle at 50% 0, rgba(255, 255, 255, 0.1), #0000);",
      },
    },
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      const scrollbarUtilities = {
        ".scrollbar-thin": {
          scrollbarWidth: "thin", // For Firefox
          scrollbarColor: "#565656 #212121", // Thumb and track colors
          borderRadius: "20px",
        },
        ".scrollbar-webkit": {
          "&::-webkit-scrollbar": {
            width: "8px", // Scrollbar width
          },
          "&::-webkit-scrollbar-track": {
            background: "#212121", // Track color
          },
          "&::-webkit-scrollbar-thumb": {
            background: "#565656", // Thumb color
            borderRadius: "20px", // Rounded corners
            border: "2px solid #212121", // Optional border
          },
          "&::-webkit-scrollbar-thumb:hover": {
            background: "#404040", // Darker thumb color on hover
          },
        },
      };

      addUtilities(scrollbarUtilities, ["responsive", "hover"]);
    }),
  ],
};
