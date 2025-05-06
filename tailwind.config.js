/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "var(--color-primary)",
        secondary: "var(--color-secondary)",

        "button-primary": "var(--color-button-primary)",
        "button-secondary": "var(--color-button-secondary)",
        "button-text": "var(--color-button-text)",
        "button-destructive": "var(--color-button-destructive)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
