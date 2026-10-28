/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "#1E4D2B",
          dark: "#173D22",
          light: "#E8F0E8",
        },
        accent: {
          DEFAULT: "#EF6C3E",
          dark: "#D9572D",
          light: "#FFF0E9",
        },
        surface: {
          DEFAULT: "#FFFFFF",
          muted: "#F6F7F5",
        },
      },
      fontFamily: {
        display: ['"Neue Montreal"', '"Inter Tight"', "sans-serif"],
        body: ["Poppins", "sans-serif"],
      },
      boxShadow: {
        soft: "0 12px 36px rgba(30, 77, 43, 0.08)",
      },
      maxWidth: {
        content: "1280px",
      },
    },
  },
  plugins: [],
};
