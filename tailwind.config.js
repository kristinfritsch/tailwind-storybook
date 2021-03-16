module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],

  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ["Circular", "sans-serif"],
    },
    colors: {
      jelly: {
        100: "#CCB6FC",
        200: "#B090F5",
        300: "#9F72FF",
        400: "#8656EF",
        DEFAULT: "#8656EF",
      },

      gumdrop: {
        100: "#90D2FF",
        200: "#989898",
        300: "#1AA3FF",
        400: "#1894E8",
        DEFAULT: "#1894E8",
      },

      apple: {
        100: "#7EF1B3",
        200: "#62E2A4",
        300: "#1ED67D",
        400: "#26BC62",
        DEFAULT: "#26BC62",
      },

      redhot: {
        100: "#FFD2DD",
        200: "#FF899E",
        300: "#FF6678",
        400: "#F05C6B",
        DEFAULT: "#F05C6B",
      },

      julius: {
        100: "#FCE7A7",
        200: "#FFCD83",
        300: "#FFA876",
        400: "#FF8368",
        DEFAULT: "#FFA876",
      },

      licorice: {
        50: "#F1F0F5",
        75: "#E1DFE8",
        100: "#C7C5D1",
        200: "#A7A3B5",
        300: "#8A849C",
        400: "#6B6580",
        500: "#4E4763",
        600: "#3D3652",
        700: "#29233B",
        800: "#1F1A30",
        DEFAULT: "#3D3652",
      },

      white: "#FFF",
      black: "#000",
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
