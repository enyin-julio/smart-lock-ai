/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        space: "#05070d",
        graphite: "#0b111c",
        panel: "#101827",
        neon: "#24d8ff",
        aqua: "#49f5c6",
        platinum: "#eef7ff",
      },
      boxShadow: {
        glow: "0 0 40px rgba(36, 216, 255, 0.24)",
        luxury: "0 32px 100px rgba(0, 0, 0, 0.42)",
      },
      fontFamily: {
        sans: [
          "Inter",
          "Noto Sans TC",
          "Microsoft JhengHei",
          "PingFang TC",
          "system-ui",
          "sans-serif",
        ],
      },
    },
  },
  plugins: [],
};
