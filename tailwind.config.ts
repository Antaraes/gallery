import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        text: "#040201",
        background: "#f7ede9",
        primary: "#265164",
        secondary: "#c5c9e8",
        accent: "#3da48f",
        darktext: "#f7ede9",
        darkbackground: "#040201",
        darkprimary: "#265164",
        darksecondary: "#06070f",
        darkaccent: "#9fdbcf",
      },
      backgroundColor: {
        text: "#040201",
        background: "#f7ede9",
        primary: "#265164",
        secondary: "#c5c9e8",
        accent: "#3da48f",
        darktext: "#f7ede9",
        darkbackground: "#040201",
        darkprimary: "#265164",
        darksecondary: "#06070f",
        darkaccent: "#9fdbcf",
      },
    },
  },
  plugins: [require("daisyui")],
};
export default config;
