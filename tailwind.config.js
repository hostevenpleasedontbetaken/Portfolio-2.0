/** @type {import('tailwindcss').Config} */
import { fontFamily } from "tailwindcss/defaultTheme";
import plugin from "tailwindcss/plugin";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      gridTemplateColumns: {
        14: "repeat(14, minmax(0, 1fr))", // Defines 14 columns
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
        // Your existing color definitions
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
        sans: ["var(--font-robot)", ...fontFamily.sans],
        chakra: ["Chakra Petch", "sans-serif"], // Add your font here
        qwitcher: ['"Qwitcher Grypen"', "sans-serif"],
        mainfont: ["main-font", "sans-serif"],
      },
      backgroundImage: {
        "radial-gradient-green":
          "radial-gradient(circle at 50% 0, rgba(0, 255, 0, 0.1), #0000);",
        "radial-gradient-white-strong":
          "radial-gradient(circle at 50% 0, rgba(255, 255, 255, 0.5), #0000);",
        "radial-gradient-white-weak":
          "radial-gradient(circle at 50% 0, rgba(255, 255, 255, 0.1), #0000);",
        "linear-gradient":
          "linear-gradient(to right, #0000 5%, #fffc 35%, #fff 50%, #fffc 65%, #0000 95%);",
      },
    },
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      const textShadowUtilities = {
        ".text-shadow-green": {
          textShadow:
            "0 0 5px rgba(0, 255, 0, 0.8), 0 0 10px rgba(0, 255, 0, 0.8), 0 0 15px rgba(0, 255, 0, 0.8)",
        },
      };
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

      addUtilities(textShadowUtilities, ["responsive", "hover"]);
      addUtilities(scrollbarUtilities, ["responsive", "hover"]);
    }),
  ],
};
