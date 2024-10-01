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
      },
      backgroundImage: {
        "radial-gradient":
          "radial-gradient(circle at 50% 0, rgba(0, 255, 0, 0.1), #0000);",
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
