/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#f446c6",

          secondary: "#6b45b2",

          accent: "#b578e8",

          neutral: "#271A2E",

          "base-100": "#EAEEF5",

          info: "#66ACD1",

          success: "#21CA72",

          warning: "#A25C11",

          error: "#F1160E",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
