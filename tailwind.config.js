/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "selector",
  theme: {
    extend: {
      fontSize: {
        xxs: "10px",
      },
      colors: {
        text: {
          black: "#000000", // 검정색, 기본 텍스트 색상
          // dark: "#000000", // 검정색, 기본 텍스트 색상
          medium: "#636363", // 중간 회색, 카드 디테일 텍스트
          light: "#B9B9B9", // 연한 회색, 달력 해당 월 날짜 이외 Text
          white: "#FFFFFF", // 하얀색, 기본 페이지에 사용
        },
        brand: {
          primary: "#FF8343",
          point: "#FF5F00",
        },
        dark: {
          background: "#212135",
        },
      },
    },
  },
  plugins: [],
};
