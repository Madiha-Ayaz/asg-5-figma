import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
        
        fontFamily:{
            algerian:['Algerian','sans-serif'],
            
            libreBodoni:['Libre Bodoni'],
        },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        headerBackground: " #A29875",

      },
    },
  },
  plugins: [],
};
export default config;