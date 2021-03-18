module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],

  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ["Circular", "sans-serif"],
    },
    colors: {
      jelly: {
        25: "#FCFAFF",
        50: "#F6F2FF",
        75: "#F1EBFF",
        90: "#E3D5FE",
        100: "#CCB6FC",
        200: "#B090F5",
        300: "#9F72FF",
        400: "#8656EF",
        DEFAULT: "#8656EF",
      },

      gumdrop: {
        25: "#F8FCFF",
        50: "#F1F8FF",
        75: "#D9EFFF",
        90: "#B5E1FF",
        100: "#90D2FF",
        200: "#989898",
        300: "#1AA3FF",
        400: "#1894E8",
        DEFAULT: "#1894E8",
      },

      apple: {
        25: "#F8FFFD",
        50: "#EEFFFA",
        75: "#E2FDF2",
        90: "#B0F7D3",
        100: "#7EF1B3",
        200: "#62E2A4",
        300: "#1ED67D",
        400: "#26BC62",
        DEFAULT: "#26BC62",
      },

      redhot: {
        25: "#FFFAFB",
        50: "#FFF6F8",
        75: "#FFEAEF",
        90: "#FFDEE6",
        100: "#FFD2DD",
        200: "#FF899E",
        300: "#FF6678",
        400: "#F05C6B",
        DEFAULT: "#F05C6B",
      },

      julius: {
        25: "#FFFCF7",
        50: "#FFF7EA",
        75: "#FFF5DF",
        90: "#FEF2D4",
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
    extend: {
      transitionProperty: ["motion-safe"],
    },
  },
  plugins: [],
};
