module.exports = {
    mode: "jit",
    content: ["./pages/**/*.{js,ts,jsx,tsx}", "./src/**/*.{js,ts,jsx,tsx}"],
    media: false, // or 'media' or 'class'
    theme: {
        fontFamily: {
            karla: ["Karla", "sans-serif"],
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
