import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        riparo: {
          brown: "#1F0B05",       // Deep Logo Brown (for text, primary dark buttons)
          brownLight: "#3D1A10",  // Secondary Logo Brown (for hover states/accents)
          yellow: "#FDBE19",      // Vibrant Logo Yellow (for high-conversion CTA buttons)
          yellowHover: "#E0A312", // Darker Yellow for hover
          bg: "#FFFFFF",          // Primary White Background
          surface: "#F8F8F6",     // Subtle Off-White for cards & section containers
          border: "#EBEBE8",      // Light neutral borders
        },
      },
      boxShadow: {
        'riparo-soft': '0 10px 30px -5px rgba(31, 11, 5, 0.08)',
        'riparo-glow-yellow': '0 4px 20px rgba(253, 190, 25, 0.35)',
        'riparo-glow-brown': '0 4px 20px rgba(31, 11, 5, 0.25)',
      },
    },
  },
  plugins: [],
};
export default config;