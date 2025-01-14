/** @type {import('tailwindcss').Config} */

import flowbite from "flowbite-react/tailwind";

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
    flowbite.content(),
  ],
  theme: {
    container: {
      center: true,
      padding: "1rem",
    },
    extend: {
      screens: {
        "2xl": "1440px",
        sm: "640px",
      },
      fontFamily: {
        sans: ["Inter var"],
      },
    },
  },
  plugins: [flowbite.plugin()],
};
