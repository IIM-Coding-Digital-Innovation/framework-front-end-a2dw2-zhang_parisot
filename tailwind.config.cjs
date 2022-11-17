/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{vue,js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'black': '#0A0909',
                'white': '#FFFFFF',
                'purple': '#8D4ED8',
                'red': '#FF6A60',
                'moon_raker': '#F3EDFB',
            },
            fontFamily: {
                Poppins: ["Poppins"],
                NeuzeitGro: ["NeuzeitGro"],
            },
        },
    },
    plugins: [],
}