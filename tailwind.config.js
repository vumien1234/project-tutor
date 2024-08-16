// tailwind.config.js
module.exports = {
    purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
    darkMode: false,
    theme: {
        extend: {
            colors: {
                "color-button": "#16a085",
                "color-button-hover": "#138f77",
                "color-purple": "#786ACF",
                "color-orange": "#FE5D37",
                "color-text": "#333",
                "color-default": "#1abc9c",
                "hover-default": "#EFF3FF",
            },
        },
        screens: {
            sm: "780px",
            md: "1480px",
        },
    },
    variants: {
        extend: {},
    },
    plugins: [require("@tailwindcss/line-clamp")],
};
