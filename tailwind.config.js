/** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [
//     "./src/**/*.{js,jsx,ts,tsx}",
//   ],
//   theme: {
//     extend: {
//       borderColor :{
//         "primary" : "rgb(85 81 277)",
//         "secondary": "#2b2d77",
//       }
//     },
//     fontFamily:{
//       "hero-font":"Merienda"
//     }
//   },
//   plugins: [],
// }

// module.exports = {
//   content: ['./src/**/*.{html,js,jsx,ts,tsx}'],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// };
// module.exports = {
//   content: ['./src/**/*.{html,js,jsx,ts,tsx}'], // Ensure all relevant files are included
//   theme: {
//     extend: {
//       colors: {
//         primary: 'rgb(85 81 227)', // Ensure the primary color is defined
//         secondary: '#222692', // Ensure the secondary color is defined
//       },
//     },
//   },
//   plugins: [],
// };

// tailwind.config.js
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // adjust as needed
  ],
  darkMode: "class", // or 'media'
  theme: {
    extend: {
      colors: {
        primary: "#000000",
        secondary: "#000000",
        tomato: "tomato",
        antiquewhite: "antiquewhite",
      },
      animation: {
        marquee: "marquee 20s linear infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
    },
  },
  plugins: [],
};
