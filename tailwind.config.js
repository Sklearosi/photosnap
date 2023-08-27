/** @type {import('tailwindcss').Config} */
export default {
 content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      height:{
        headerHeight:"72px",
        menuHeight:"253px",
        heroHeight:"293px",
        blackDiv:"419px",
        mobHeight:"375px"
      },
      transitionDuration: {
        '500': '0.5s',
      },
      fontFamily:{
        dmSans: "'DM Sans', sans-serif"
      }
    },
  },
  plugins: [],
}

