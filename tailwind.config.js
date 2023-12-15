/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: "#158bd9",
        secondary: "#020d1f",
      },
      screens: {
        xsm: "440px",
      },
      height: {
        116: "23rem",
        132: "42rem",
      },
      // backgroundImage: {
      //   "sliderImg-1": "url('/public/images/LatestPic1.png')",
      //   "sliderImg-2": "url('/public/images/LatestPic2.png')",
      // },
    },
  },
  plugins: [],
};
