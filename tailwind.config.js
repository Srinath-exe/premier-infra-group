const colors = require('./components/ui/colors');

module.exports = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}',
        './app/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        extend: {
            colors: {
                primary: colors.primary,
                secondary: colors.secondary,
                textPrimary: colors.textPrimary,
                textSecondary: colors.textSecondary,
            },
        },
    },
    plugins: [],
};