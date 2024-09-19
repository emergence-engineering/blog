/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./articles/**/*.{js,jsx,ts,tsx}",
    "./pages/**/*.{js,jsx,ts,tsx}",
    "./features/**/*.{js,jsx,ts,tsx}",
    "./ui/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      sm: "640px",
      md: "769px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      screens: {
        xs: "375px",
        mobile: "480px",
      },
      maxWidth: {
        "8xl": "90rem",
        1140: "71.25rem",
        1440: "90rem",
        half: "50%",
      },
      height: {
        100: "26rem",
        128: "32rem",
        148: "37rem",
        192: "48rem",
        800: "50rem",
        204: "51rem",
        228: "57rem",
        268: "67rem",
        388: "97rem",
        lp: "830rem",
      },
      width: {
        112: "28rem",
        140: "35rem",
        188: "47rem",
      },
      padding: {
        32: "8rem",
      },
      fontSize: {
        "3.5xl": "34px",
        "4.5xl": "40px",
        "7.5xl": "80px",
        "8xl": "90px",
      },
      fontFamily: {
        sans: ["var(--font-pt-sans)"],
        sansNarrow: ["var(--font-pt-sans-narrow)"],
        montserrat: ["var(--font-montserrat)"],
        inter: ["var(--font-inter)"],
        jetbrainsMono: ["var(--font-jetbrains-mono)"],
      },
      backgroundImage: {
        hyperspace: "url('lp/hyperspace.webp')",
        hyperspaceMobile: "url('lp/hyperspace_mobile.webp')",
        "orange-button":
          "linear-gradient(270deg, #FE3301 0%, #FD7503 50%, #FF1B00 100%)",
        "letter-background":
          "linear-gradient(to right, rgba(255, 214, 68, 1), rgba(253, 117, 3, 1), rgba(255, 27, 0, 1))",
      },
      colors: {
        "letter-red": "rgba(255, 27, 0, 1)", // You can name this color anything you like
        "product-card-gradient": "#FF1B00",
        customGray: "#373737",
        "custom-charcoal": "#585858",
      },
      textColor: {
        transparent: "transparent",
      },
      backgroundColor: {
        "ref-card-gray": "rgba(55, 55, 55, 1)",
        "product-card-yellow": "#FFD644",
      },
      boxShadow: {
        productCard: "-6px 6px 0px 0px #000000",
      },
      aspectRatio: {
        "product-image": "526/273",
        "stripe-tag": "188.69/32",
      },
    },
  },
  plugins: [],
};
