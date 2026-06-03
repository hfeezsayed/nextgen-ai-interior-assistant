import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
  colors: {
    brand: {
      dark: "#0F1412",
      primary: "#1F3D33",
      accent: "#3A5A50",
      light: "#F5F7F6",
    },
  },
},
  },
  plugins: [],
};

export default config;
