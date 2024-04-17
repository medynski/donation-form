import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
    borderRadius: {
      DEFAULT: "5px",
    },
    colors: {
      white: "#ffffff",
      black: "#000000",
      "midnight-grey": "#4d6374",
      grey: "#888888",
      salmon: "#ffdacb",
      "midnight-purple": "#423c66",
      "purple-grey": "#474A62",
      stroke: "#E9EEF2",
      "blue-grey": "#F4F8FA",
      "blue-grey-900": "#1E2A32",
    },
  },
  plugins: [],
};
export default config;
