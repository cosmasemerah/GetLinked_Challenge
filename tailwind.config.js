/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        clash: ["Clash Display", "sans-serif"],
        unica: ["Unica One", "cursive"],
      },
      fontSize: {
        base2: ["0.8125rem"], //13px
        "3xl": ["2rem"], //32pc

        // xs: ['0.75rem', { lineHeight: 1.4 }], //12px
        // base: ['1rem', { lineHeight: 1.4 }], //16px
        // '2xl': ['1.375rem', { lineHeight: 1.4 }], //22px
        // '3xl': ['1.75rem', { lineHeight: 1.4 }], //28px
        // '4xl': ['2.375rem', { lineHeight: 1.4 }], //38px
        // '5xl': ['3.1875rem', { lineHeight: 1.1 }], //51px
        // '6xl': ['4.1875rem', { lineHeight: 1.4 }], //67px
      },
      colors: {
        navy: "#150E28",
        darkNavy: "#100B20;",
        lavender: "#903AFF",
        purple: "#D434FE",
        pink: "#FF26B9",
      },
      backgroundImage: {
        primary: "linear-gradient(270deg, #903AFF 0%, #FE34B9 100%);",
        flareLeft: "url('/src/assets/Purple-Lens-Flare-PNG.png')",
        flareGuildeline: "url('/src/assets/GuildlineFlare.png')",
        flareCriteria: "url('/src/assets/FlareCriteria.png')",
      },
      container: {
        sm: "",
      },
    },
  },
  plugins: [],
};
