/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "banner-image": "url('./assets/images/banner.jpg')",
        "about-image": "url('./assets/images/about.jpg')"
      }
    },
  },
  plugins: [require("daisyui")],
}

