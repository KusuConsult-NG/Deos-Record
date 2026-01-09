import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: "#eebd2b",
                gold: "#D4AF37",
                "background-light": "#f8f7f6",
                "background-dark": "#221d10",
            },
            fontFamily: {
                display: ["var(--font-spline)", "var(--font-noto)", "sans-serif"],
                sans: ["var(--font-spline)", "sans-serif"],
                serif: ["var(--font-newsreader)", "serif"],
                manrope: ["var(--font-manrope)", "sans-serif"],
            },
        },
    },
    plugins: [],
    darkMode: "class",
};
export default config;
