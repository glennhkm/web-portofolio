import type { Config } from "tailwindcss"
import defaultTheme from "tailwindcss/defaultTheme";
import svgToDataUri from "mini-svg-data-uri"
import colors from "tailwindcss/colors";
import flattenColorPalette from "tailwindcss/lib/util/flattenColorPalette";
import plugin from "tailwindcss/plugin"
import { robotoFlex } from "@/lib/fonts/getFonts";

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
  plugins: [
    addVariablesForColors,
    plugin(({ matchUtilities, theme }) => {
      matchUtilities(
        {
          "bg-grid": (value: string) => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none" stroke="${value}"><path d="M0 .5H31.5V32"/></svg>`
            )}")`,
          }),
          "bg-grid-small": (value: string) => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="8" height="8" fill="none" stroke="${value}"><path d="M0 .5H31.5V32"/></svg>`
            )}")`,
          }),
          "bg-dot": (value: string) => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="16" height="16" fill="none"><circle fill="${value}" id="pattern-circle" cx="10" cy="10" r="1.6257413380501518"></circle></svg>`
            )}")`,
          }),
        },
        { values: flattenColorPalette(theme("backgroundColor")), type: "color" }
      );
    }),
  ],
};

function addVariablesForColors({ addBase, theme }: any) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );
 
  addBase({
    ":root": newVars,
  });
}

export default config;