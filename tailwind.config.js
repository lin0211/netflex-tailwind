import { range } from "lodash";
const pxToRem = (px, base = 16) => `${px / base}rem`;

const pxToRemFunc = (start, end) => {
  return range(start, end).reduce((acc, px) => {
    acc[`${px}pxr`] = pxToRem(px);
    return acc;
  }, {});
};

/** @type {import('tailwindcss').Config} **/
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx,html}"],
  theme: {
    extend: {
      spacing: {
        ...pxToRemFunc(0, 1000),
      }, // px을 rem으로 변환
      inset: {
        ...pxToRemFunc(0, 1000),
      },
      fontSize: {
        ...pxToRemFunc(0, 1000),
      }, // px을 rem으로 변환
      lineHeight: {
        ...pxToRemFunc(0, 1000),
      }, // px을 rem으로 변환
      screens: {
        mobile: "360px",
        tablet: "768px",
        desktop: "1280px",
      },
      colors: {
        White: "#ffffff",
        Black: "#010101",
        Red: {
          100: "#faced0",
          200: "#f59da1",
          300: "#ef6b72",
          400: "#ea3a43",
          500: "#e50914",
          600: "#b70710",
          700: "#89050c",
          800: "#5c0408",
          900: "#2e0204",
        },
        Blue: {
          100: "#cce3fb",
          200: "#99c6f7",
          300: "#66aaf3",
          400: "#338def",
          500: "#0071eb",
          600: "#005abc",
          700: "#00448d",
          800: "#002d5e",
          900: "#00172f",
        },
        Green: {
          100: "#d5f8e3",
          200: "#acf2c8",
          300: "#82ebac",
          400: "#58e590",
          500: "#2ede75",
          600: "#25b25d",
          700: "#1c8546",
          800: "#13592f",
          900: "#092c17",
        },
        Gray: {
          100: "#e3e3e3",
          200: "#c8c8c8",
          300: "#acacac",
          400: "#919191",
          500: "#757575",
          600: "#5e5e5e",
          700: "#464646",
          800: "#2f2f2f",
          900: "#171717",
        },
      },
    },
    fontFamily: {
      sans: ["noto-sans-kr", "sans-serif"],
    }, // font-family: noto-sans-kr, sans-serif;
  },
  plugins: [],
};
