/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "1rem",
      screens: { "2xl": "1200px" },
    },
    extend: {
      colors: {
        brand: {
          50: "#fff1f5",
          100: "#ffe4ed",
          200: "#fecdd9",
          300: "#fba4bf",
          400: "#f46fa0",
          500: "#e84393", // primary pink
          600: "#d23482",
          700: "#b1246c",
          800: "#8f1e57",
          900: "#761b49",
        },
        skyish: "#60a5fa",
        purpleish: "#8b5cf6",
        limeish: "#a3e635",
      },
      fontFamily: {
        sans: ["var(--font-display)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        soft: "0 10px 30px -10px rgba(232, 67, 147, 0.35)",
      },
      borderRadius: {
        xl: "1rem",
        '2xl': "1.25rem",
        '3xl': "1.75rem",
      },
    },
  },
  plugins: [],
};


