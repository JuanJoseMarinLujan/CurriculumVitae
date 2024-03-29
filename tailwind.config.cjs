/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      titleColor: "#333333",
      titleDarkColor: "#d9cdbf",
      textColor: "#757575",
      bodyColor: "#FAFAFA",
      containerColor: "#FFFFFF",
      instgrmColor: "#DD2A7B",
      lnkdnColor: "#0077B5",
      gthbColor: "#6e5494",
    },
    fontFamily: {
      Poppins: ["Poppins", "sans-serif"],
    },
    screens: {
      sm: "351px",
      // => @media (min-width: 351px) { ... }
      md: "577px",
      // => @media (min-width: 577px) { ... }
      lg: "769px",
      // => @media (min-width: 769px) { ... }
      dt: "993px",
      // => @media (min-width: 993px) { ... }
    },
    extend: {
      keyframes: {
        scroll: {
          "0%": { transform: "translateY(0)" },
          "30%": { transform: "translateY(3.75rem)" },
        },
        profileAnimate: {
          "0%": { rounded: "100% 40% 30% 70%/60% 30% 70% 40%" },
          "50%": { rounded: "30% 60% 70% 40%/50% 60% 30% 60%" },
          "100%": { rounded: "100% 40% 30% 70%/60% 30% 70% 40%" },
        },
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
