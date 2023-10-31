/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      colors: {
        primary: "#b91c1c",
        secondary: "#ea580c",
        yellow: "#f59e0b",
        purple: "#7c3aed",
        blue: "#0284c7",
        heading: "#94a3b8",
        main: "#d1d5db",
        textColor: "#111827"
      },
      boxShadow: {
        panelShadow: "rgba(17, 12, 46, 0.15) 0px 48px 100px 0px;",
      },
    },
  },
  plugins: [],
}

