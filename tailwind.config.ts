import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          primary: "#0f0f13",
          secondary: "#1a1a24",
          tertiary: "#22222f",
        },
        border: {
          subtle: "#2a2a38",
          DEFAULT: "#3a3a50",
        },
        accent: {
          DEFAULT: "#6c63ff",
          soft: "rgba(108, 99, 255, 0.12)",
          hover: "#7c74ff",
        },
        success: "#10b981",
        error: "#ef4444",
        text: {
          primary: "#f0f0f5",
          secondary: "#c0c0d8",
          muted: "#8888aa",
        },
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      borderRadius: {
        xl: "1rem",
        "2xl": "1.25rem",
      },
      boxShadow: {
        card: "0 4px 32px rgba(0, 0, 0, 0.4)",
        "accent-glow": "0 0 24px rgba(108, 99, 255, 0.2)",
      },
      backgroundImage: {
        "gradient-surface":
          "linear-gradient(135deg, #1a1a24 0%, #1e1e2e 100%)",
        "gradient-accent":
          "linear-gradient(135deg, #6c63ff 0%, #9c8dff 100%)",
      },
    },
  },
  plugins: [],
};

export default config;
