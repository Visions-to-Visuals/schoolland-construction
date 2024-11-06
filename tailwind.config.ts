import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {

    colors: {
      primary: "#FFFFFF",    
      secondary: "#2B4C3B",   
      accent: "#182C25",
      dark: "#1E1E1E",
      hover: "#dedede",
      background: "#2B4C3B",
         
    },

    screens: {
      'monitor': {'min': '2000px'},       // 1600px and beyond
      'laptop': {'max': '1440px'},        // 1250px up to 1440px
      'laptop-s': {'max': '1250px'},      // 1024px up to 1250px
      'tablet': {'max': '1024px'},        // 768px up to 1024px
      'tablet-s': {'max': '768px'},       // 480px up to 768px
      'mobile': {'max': '500px'},         // 340px up to 480px
      'mobile-s': {'max': '340px'},       // 0px up to 340px
    },

    extend: {

      animation:{
        arrow: "glow 7s ease-in-out 5.1s infinite",
        circle1: "glow1 7s ease-in-out 4.8s infinite",
        circle2: "glow2 7s ease-in-out 4.5s infinite",
        circle3: "glow3 7s ease-in-out 4.2s infinite",
        topCover: "opening 1.5s ease-in-out forwards 1.8s",
        bottomCover: "opening 1.2s ease-in-out forwards 2s",
        welcome: "translate 2s ease-in-out forwards .4s",
        to: "translate 1.5s ease-in-out forwards .8s",
        fadeIn : "translateY 800ms ease-in-out",
        faq : "translateYY 400ms ease-in-out forwards 1s",
        background: "fadeIn 3s ease-in-out"
      },

      keyframes: {
        glow: {
          "0%": { opacity: "0" },
          "20%": { opacity: ".8" },
          "35%": { opacity: ".0" },
          "100%": { opacity: "0" }
        },

        glow1: {
          "0%": { opacity: "0" },
          "20%": { opacity: ".6" },
          "30%": { opacity: ".0" },
          "100%": { opacity: "0" }
        },

        glow2: {
          "0%": { opacity: "0" },
          "20%": { opacity: ".4" },
          "30%": { opacity: ".0" },
          "100%": { opacity: "0" }
        },

        glow3: {
          "0%": { opacity: "0" },
          "20%": { opacity: ".2" },
          "30%": { opacity: ".0" },
          "100%": { opacity: "0" }
        },

        opening: {
          "0%": {opacity: "1"},
          "70%": {transform: "translateX(110vw)", opacity: "1"},
          "100%": {transform: "translateX(110vw)", opacity: "0"},
        },

        translate: {
          '0%': {opacity: '0', scale:"1"},
          '20%': {opacity: '1', scale:"1.1"},
          '75%': {opacity: '1', scale:"1.1"},
          '90%': {opacity: '0', scale:"1.1"},
          '100%': {opacity: '0', scale:"1.1", visibility: "hidden" },
        },

        translateY: {
          '0%': { transform: 'translateY(10px)', opacity: '0' },
          '100%': { transform: 'translateY(0px)', opacity: '1' },
        },

        translateYY: {
          '0%': { transform: 'translateY(30px)', opacity: '0' },
          '100%': { transform: 'translateY(0px)', opacity: '1' },
        },

        fadeIn: {
          '100%': { opacity: '.2' },
          '0%': { opacity: '0' },
        },

        fade: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },

      backgroundImage: {
        'background': "url('/images/background.jpg')",
      },

      floorplan: {
        'background': "url('/images/floorplan.png')",
      },
    },
  },
  plugins: [],
};
export default config;
