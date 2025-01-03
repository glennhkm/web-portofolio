import type { Config } from "tailwindcss"

const config: Config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      dropShadow: {
        "balance": "0 0 20px 2px",
      },
      animation: {
        "spotlight": "spotlight 2s ease .75s 1 forwards",
        "meteor-effect": "meteor 5s linear infinite",
        "blink": 'blink 1.4s infinite',
        "spin-slow": "spin 12s linear infinite",
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "#1d1d1d",
        secondary: "#FFDE4D" ,
        third: "#32a2b0",
        thirdAlternative: "#255257",
      },
      screens: {
        "xs": "376px",
        "lg": "1025px",
      },
      fontFamily: {
        geistSans: "var(--font-geist-sans)",
        geistMono: "var(--font-geist-mono)",
        metropolis: ['Metropolis', 'sans-serif'],
        moderniz: ['Moderniz', 'sans-serif'],
        robotoFlex: ['Roboto Flex', 'sans-serif'],
      },
      boxShadow: {
        balance: "0 0 10px 2px",
      },
      keyframes: {
        blink: {
          '0%, 100%': { opacity: "0.8" },
          '50%': { opacity: "0.3" },
        },
        spotlight: {
          "0%": {
            opacity: "0",
            transform: "translate(-72%, -62%) scale(0.5)",
          },
          "100%": {
            opacity: "1",
            transform: "translate(-50%,-40%) scale(1)",
          },
        },
        meteor: {
          "0%": { transform: "rotate(215deg) translateX(0)", opacity: "1" },
          "70%": { opacity: "1" },
          "100%": {
            transform: "rotate(215deg) translateX(-500px)",
            opacity: "0",
          },
        },
      },
    },
  },
  plugins: [],
};

export default config;