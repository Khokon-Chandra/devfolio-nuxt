module.exports = {
    darkMode: 'class',
    mode: 'jit',
    theme: {
        extend: {
            screens: {
                'xs': '480px',
            },
            keyframes: {
                'fade-up': {
                    '0%': { opacity: '0', transform: 'translateY(14px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
                'ping-slow': {
                    '75%, 100%': { transform: 'scale(2)', opacity: '0' },
                },
            },
            animation: {
                'fade-up': 'fade-up .5s cubic-bezier(.16,1,.3,1) both',
                'ping-slow': 'ping-slow 2s cubic-bezier(0,0,.2,1) infinite',
            },
        },
    },
    plugins: [
        require('@tailwindcss/typography'),
    ],
};
