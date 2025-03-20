/** @type {import('tailwindcss').Config} */
const tailwindConfig = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "space-black": "#1A1A2E", // Dark background color
        "star-white": "#E5E5E5", // Light text color
        "nebula-purple": "#8B5CF6", // Vibrant purple for hover effects
        background: "var(--background)", // Custom background linked to CSS variable
        foreground: "var(--foreground)", // Custom foreground linked to CSS variable
      },
      spacing: {
        30: "7.5rem", // For mr-30 in your header
      },
      transitionProperty: {
        width: "width", // For the underline animation
      },
    },
  },
  plugins: [require("tailwindcss-animate"), require("@tailwindcss/typography")],
  darkMode: "class", // Enables dark mode with class strategy
};

export default tailwindConfig;
