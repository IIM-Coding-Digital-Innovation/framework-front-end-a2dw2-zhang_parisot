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
            letterSpacing: {
                tight: '-.015em',
            },
            boxShadow: {
                'shadow-search': '2px 8px 30px rgba(0, 0, 0, 0.06)',
                'shadow-card': '2px 8px 30px rgba(37, 33, 32, 0.06)',
            },
            letterSpacing: {
                tight: '-.015em',
            },
            boxShadow: {
                'shadow-search': '2px 8px 30px rgba(0, 0, 0, 0.06)',
                'shadow-card': '2px 8px 30px rgba(37, 33, 32, 0.06)',
            },
            dropShadow: {
                'shadow-feedback': '2px 8px 30px rgba(37, 33, 32, 0.06)',
            }
        },
    },
    plugins: [],
}