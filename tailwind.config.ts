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
      "midnight-purple-500": "#645D93",
      "midnight-purple-800": "#241E47",
      "purple-grey": "#474A62",
      "purple-grey-100": "#BEBEBE",
      "purple-grey-200": "#F4F5FE",
      "purple-grey-300": "#E9EAF2",
      "purple-grey-500": "#F7F6FF",
      "purple-grey-800": "#ECE9FC",
      stroke: "#E9EEF2",
      "blue-grey": "#F4F8FA",
      "blue-grey-900": "#1E2A32",
    },
  },
  plugins: [],
};
export default config;
