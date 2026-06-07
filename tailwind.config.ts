import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#131315",
        surface: {
          DEFAULT: "#131315",
          dim: "#131315",
          bright: "#39393b",
          variant: "#353437",
          container: {
            lowest: "#0e0e10",
            low: "#1c1b1d",
            DEFAULT: "#201f22",
            high: "#2a2a2c",
            highest: "#353437",
          },
          tint: "#b4c5ff",
        },
        primary: {
          DEFAULT: "#00DF73",
          container: "#00BA61",
          fixed: "#ccffeb",
          "fixed-dim": "#00DF73",
        },
        on: {
          surface: "#e5e1e4",
          "surface-variant": "#c3c6d7",
          primary: "#000000",
          "primary-container": "#ffffff",
          "primary-fixed": "#00174b",
          "primary-fixed-variant": "#003ea8",
        },
        border: {
          subtle: "rgba(255, 255, 255, 0.08)",
        },
        electric: {
          blue: "#00DF73",
        },
        indigo: {
          glow: "#00DF73",
        },
        tertiary: {
          DEFAULT: "#2be36f",
        },
        glass: {
          bg: "rgba(15, 23, 42, 0.65)",
        },
      },
      fontFamily: {
        sans: ["var(--font-geist)", "sans-serif"],
        mono: ["var(--font-jetbrains-mono)", "monospace"],
      },
      fontSize: {
        "display-lg": [
          "64px",
          { lineHeight: "1.1", letterSpacing: "-0.04em", fontWeight: "700" },
        ],
        "display-lg-mobile": [
          "40px",
          { lineHeight: "1.2", letterSpacing: "-0.02em", fontWeight: "700" },
        ],
        "headline-md": [
          "32px",
          { lineHeight: "1.3", letterSpacing: "-0.02em", fontWeight: "600" },
        ],
        "headline-sm": [
          "24px",
          { lineHeight: "1.4", letterSpacing: "-0.01em", fontWeight: "600" },
        ],
        "body-lg": ["18px", { lineHeight: "1.6", fontWeight: "400" }],
        "body-md": ["16px", { lineHeight: "1.6", fontWeight: "400" }],
        "body-sm": ["14px", { lineHeight: "1.5", fontWeight: "400" }],
        "label-caps": [
          "12px",
          { lineHeight: "1", letterSpacing: "0.1em", fontWeight: "500" },
        ],
        "mono-data": ["13px", { lineHeight: "1.5", fontWeight: "400" }],
      },
      spacing: {
        gutter: "24px",
        "margin-desktop": "64px",
        "margin-mobile": "16px",
        "max-width": "1280px",
      },
    },
  },
  plugins: [],
};

export default config;
