/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",

  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    extend: {
      animation: {
        // 🔥 Marquee
        marquee: "marquee 25s linear infinite",
        marqueeReverse: "marqueeReverse 25s linear infinite",
        marqueeSlow: "marquee 40s linear infinite",
        marqueeReverseSlow: "marqueeReverse 40s linear infinite",

        // 🔥 UI animations
        fadeIn: "fadeIn 0.8s ease forwards",
        float: "float 6s ease-in-out infinite",
        floatSlow: "floatSlow 10s ease-in-out infinite",
        floatReverse: "floatReverse 7s ease-in-out infinite",
        floatLeader: "floatLeader 8s ease-in-out infinite",
        pulseGlow: "pulseGlow 3s ease-in-out infinite",
        scaleIn: "scaleIn 0.5s ease forwards",
      },

      keyframes: {
        // ✅ LEFT FLOW (content moves left)
        marquee: {
          "0%": { transform: "translate3d(0,0,0)" },
          "100%": { transform: "translate3d(-50%,0,0)" },
        },

        // ✅ RIGHT FLOW
        marqueeReverse: {
          "0%": { transform: "translate3d(-50%,0,0)" },
          "100%": { transform: "translate3d(0,0,0)" },
        },

        fadeIn: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },

        float: {
          "0%, 100%": { transform: "translate3d(0,0,0)" },
          "50%": { transform: "translate3d(10px,-20px,0)" },
        },

        floatSlow: {
          "0%, 100%": { transform: "translate3d(0,0,0)" },
          "50%": { transform: "translate3d(-15px,-30px,0)" },
        },

        floatReverse: {
          "0%, 100%": { transform: "translate3d(0,0,0)" },
          "50%": { transform: "translate3d(-10px,20px,0)" },
        },

        floatLeader: {
          "0%, 100%": { transform: "translate3d(0,0,0) scale(1)" },
          "50%": { transform: "translate3d(5px,-12px,0) scale(1.05)" },
        },

        pulseGlow: {
          "0%, 100%": { opacity: "0.6", transform: "scale(1)" },
          "50%": { opacity: "1", transform: "scale(1.2)" },
        },

        scaleIn: {
          "0%": { opacity: "0", transform: "scale(0.9)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
      },
    },
  },

  plugins: [],
};
