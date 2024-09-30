import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{html,js}",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        naver: "#01c73d",
        kakao: "#fddc40",
        primary: "#28cc6c",
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
export default config;
