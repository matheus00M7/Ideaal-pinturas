import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        ideaal: {
          navy: "#08294A",
          blue: "#0D3D68",
          orange: "#FF7A00",
          ink: "#102033",
          mist: "#F4F7FB"
        }
      },
      boxShadow: {
        premium: "0 22px 70px rgba(8, 41, 74, 0.14)"
      }
    }
  },
  plugins: []
};

export default config;
