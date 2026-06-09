import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        campaign: {
          green: "#118047",
          deep: "#0d3f2a",
          mint: "#e8f7ef",
          ink: "#242833"
        }
      },
      boxShadow: {
        soft: "0 18px 60px rgba(15, 23, 42, 0.10)"
      },
      backgroundImage: {
        "hero-court": "url('/campaign-court.svg')"
      },
      animation: {
        "fade-up": "fadeUp 0.7s ease-out both",
        "slide-in": "slideIn 0.8s ease-out both"
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(18px)" },
          "100%": { opacity: "1", transform: "translateY(0)" }
        },
        slideIn: {
          "0%": { opacity: "0", transform: "translateX(24px)" },
          "100%": { opacity: "1", transform: "translateX(0)" }
        }
      }
    }
  },
  plugins: []
};

export default config;
