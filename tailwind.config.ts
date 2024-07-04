export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'primary-gradient': 'linear-gradient(90deg, #5606FF 0%, #FE8989 100%);',
      },
      colors: {
        'primary-blue': {
          DEFAULT: '#101828',

          100: '#1D2939',
        },
        'secondary-blue': '#101828',
        'light-gray': '#98A2B3',
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
        },
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
}
