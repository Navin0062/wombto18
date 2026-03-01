import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#3b82f6",
        "background-light": "#ffffff",
        "background-dark": "#0f172a",
      },
      fontFamily: {
        display: ["Lexend", "sans-serif"],
      },
      borderRadius: {
        DEFAULT: "0.75rem",
        lg: "1.25rem",
        xl: "2rem",
        "2xl": "3rem",
        full: "9999px",
      },
    },
  },
  // safelist: [
  //   {
  //     pattern: /(bg|text)-(blue|green|orange|purple)-(100|700)/,
  //   },
  // ],
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/container-queries"),
  ],
};
export default config;