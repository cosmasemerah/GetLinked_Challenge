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
        flareheroM: "url('/src/assets/FlareHeroM.png')",
        flareheroS1: "url('/src/assets/FlareHeroS1.png')",
        flareheroS2: "url('/src/assets/FlareHeroS2.png')",
        flarerulesM1: "url('/src/assets/FlareRulesM1.png')",
        flarerulesM2: "url('/src/assets/FlareRulesM2.png')",
        flarerulesS1: "url('/src/assets/FlareRulesS1.png')",
        flarerulesS2: "url('/src/assets/FlareRulesS2.png')",
        flarecriteriaM1: "url('/src/assets/FlareCriteriaM1.png')",
        flarecriteriaM2: "url('/src/assets/FlareCriteriaM2.png')",
        flarecriteriaS1: "url('/src/assets/FlareCriteriaS1.png')",
        flarecriteriaS2: "url('/src/assets/FlareCriteriaS2.png')",
        flarerewardsM1: "url('/src/assets/FlareRewardsM1.png')",
        flarerewardsM2: "url('/src/assets/FlareRewardsM2.png')",
        flarerewardsS1: "url('/src/assets/FlareRewardsS1.png')",
        flarerewardsS2: "url('/src/assets/FlareRewardsS2.png')",
      },
      container: {
        sm: "",
      },
    },
  },
  plugins: [],
};
