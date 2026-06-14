/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#080808", // Deep Black
        secondary: "#121212", // Rich Charcoal
        accent: "#00ffcc", // Neo-Mint
        "accent-secondary": "#7000ff", // Electric Purple
        surface: "#1a1a1a",
        "card-bg": "rgba(26, 26, 26, 0.6)",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        heading: ["Outfit", "sans-serif"],
        display: ["Sora", "sans-serif"],
      },
      backgroundImage: {
        "gradient-neon": "linear-gradient(135deg, #00ffcc 0%, #7000ff 100%)",
        "gradient-surface": "radial-gradient(circle at center, #1a1a1a 0%, #080808 100%)",
      },
      animation: {
        "glow-slow": "glow 8s ease-in-out infinite",
        "float-alt": "floatAlt 5s ease-in-out infinite",
      },
      keyframes: {
        glow: {
          "0%, 100%": { opacity: 0.3 },
          "50%": { opacity: 0.6 },
        },
        floatAlt: {
          "0%, 100%": { transform: "translateY(0) rotate(0)" },
          "50%": { transform: "translateY(-15px) rotate(2deg)" },
        }
      },
    },
  },
  plugins: [],
};
