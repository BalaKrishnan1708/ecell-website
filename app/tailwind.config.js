// In your tailwind.config.js file

/** @type {import('tailwindcss').Config} */
module.exports = {
  // ...your existing config
  theme: {
    extend: {
      // ...your existing extend properties
      keyframes: {
        "fade-in": {
          "from": { opacity: "0" },
          "to": { opacity: "1" },
        },
        "fade-in-up": {
          "from": { opacity: "0", transform: "translateY(20px)" },
          "to": { opacity: "1", transform: "translateY(0)" },
        },
        "zoom-in": {
          "from": { transform: "scale(1.05)" },
          "to": { transform: "scale(1)" },
        },
      },
      animation: {
        "fade-in": "fade-in 1s ease-out forwards",
        "fade-in-up": "fade-in-up 0.8s ease-out forwards",
        "zoom-in": "zoom-in 8s ease-out forwards",
      },
    },
  },
  // ...your existing plugins
}