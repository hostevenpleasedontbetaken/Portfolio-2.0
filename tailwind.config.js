/** @type {import('tailwindcss').Config} */
import { fontFamily } from "tailwindcss/defaultTheme";
import plugin from "tailwindcss/plugin";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // Your existing color definitions
        main: {
          1: "rgba(0, 255, 0, 0.6)",
          2: "rgba(0, 255, 0, 0.1)",
          3: "rgba(0, 255, 0, 1)",
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
        },
      },
      fontFamily: {
        sans: ["var(--font-robot)", ...fontFamily.sans],
        chakra: ["Chakra Petch", "sans-serif"], // Add your font here
        qwitcher: ['"Qwitcher Grypen"', "sans-serif"],
      },
      backgroundImage: {
        "radial-gradient":
          "radial-gradient(circle at 50% 0, rgba(0, 255, 0, 0.1), #0000);",
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

      addUtilities(textShadowUtilities, ["responsive", "hover"]);
    }),
  ],
};
