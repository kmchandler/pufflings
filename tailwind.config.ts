import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";
const plugin = require('tailwindcss/plugin')

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      'light-yellow': '#ffffef',
      'tea-green': '#CBDFBD',
      'atomic-tangerine': '#F19C79',
      'oxford-blue': '#011936',
      ...defaultTheme.colors
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
