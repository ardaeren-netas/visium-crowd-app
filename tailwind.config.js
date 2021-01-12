module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        turkuaz: {
          light: "#1aa6af",
          DEFAULT: "#009ca6",
          dark: "#004e53",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
