import defaultTheme from "tailwindcss/defaultTheme";
import forms from "@tailwindcss/forms";

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php",
        "./storage/framework/views/*.php",
        "./resources/views/**/*.blade.php",
        "./resources/js/**/*.jsx",
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ["Figtree", ...defaultTheme.fontFamily.sans],
            },
        },
        keyframes: {
            fadeInDown: {
                "0%": {
                    opacity: "0",
                    transform: "translateY(-20px)",
                },
                "100%": {
                    opacity: "1",
                    transform: "translateY(0)",
                },
            },
            fadeInUp: {
                "0%": {
                    opacity: "1",
                    transform: "translateY(0)",
                },
                "75%": {
                    opacity: "0.3",
                    transform: "translateY(-15px)",
                },
                "100%": {
                    opacity: "0",
                    transform: "translateY(-30px)",
                },
            },
        },
        animation: {
            "fade-in-down": "fadeInDown 200ms ease-out forwards",
            "fade-in-up": "fadeInUp  200ms ease-out forwards",
        },
    },

    plugins: [forms],
};
