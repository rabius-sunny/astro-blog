/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
      },
      screens: {
        DEFAULT: "80rem",
      },
    },
    extend: {
      colors: {
        primary: "hsl(var(--primary))",
        text: "hsl(var(--text))",
        background: "hsl(var(--background))",
      },
      fontFamily: {
        serif: ["Gambetta", "serif"],
        secondary: ["Virgil", "sans-serif"], // Virgil font with sans-serif fallback
        mono: ["GeistMono"],
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
