import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      'gradient': 'linear-gradient(to right top, rgba(70, 76, 237), rgba(100, 63, 156, 1), rgb(233, 71, 160))',
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      customHeader: {
        fontSize: ['2.25rem', '3rem'], // Equivalent to text-4xl and text-5xl
        fontWeight: '700', // Equivalent to font-bold
      },
    },
  },
  plugins: [],
};
export default config;
