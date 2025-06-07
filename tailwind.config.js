/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      "dark-green": "#2D322C",
      "mango-orange": "#F79009",
      white: "#FFFFFF",
      red: "#FF0000",
      purple: "#7e5bef",
      pink: "#ff49db",
      orange: "#ff7849",
      green: "#13ce66",
      yellow: "#ffc82c",
      // Add neutral colors for dark mode support
      neutral: {
        50: "#fafafa",
        100: "#f5f5f5",
        300: "#d4d4d4",
        400: "#a3a3a3",
        500: "#737373",
        800: "#262626",
        900: "#171717",
        950: "#0a0a0a",
      },
    },
    fontFamily: {
      orbitron: ["Orbitron", "sans-serif"],
      montserrat: ["Montserrat", "sans-serif"],
    },
    extend: {
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
     
      //   keyframes: {
      //     "accordion-down": {
      //       from: { height: 0 },
      //       to: { height: "var(--radix-accordion-content-height)" },
      //     },
      //     "accordion-up": {
      //       from: { height: "var(--radix-accordion-content-height)" },
      //       to: { height: 0 },
      //     },
      //     "slide-in-from-right": {
      //       from: { transform: 'translateX(100%)' },
      //       to: { transform: 'translateX(0)' },
      //     },
      //     "slide-out-to-right": {
      //       from: { transform: 'translateX(0)' },
      //       to: { transform: 'translateX(100%)' },
      //     },
      //     "fade-in": {
      //       from: { opacity: '0' },
      //       to: { opacity: '1' },
      //     },
      //     "fade-out": {
      //       from: { opacity: '1' },
      //       to: { opacity: '0' },
      //     },
      //   },
      //   animation: {
      //     "accordion-down": "accordion-down 0.2s ease-out",
      //     "accordion-up": "accordion-up 0.2s ease-out",
      //     "slide-in-right": "slide-in-from-right 0.5s ease-out",
      //     "slide-out-right": "slide-out-to-right 0.3s ease-in",
      //     "fade-in": "fade-in 0.2s ease-out",
      //     "fade-out": "fade-out 0.2s ease-in",
      //   },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    // Only include textFillStroke if you've installed and need it
    // require("tailwindcss-text-fill-stroke"),
  ],
};
