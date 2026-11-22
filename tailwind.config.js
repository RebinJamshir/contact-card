/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./js/**/*.js"],
  theme: {
    screens: {
      'xs': '360px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    extend: {
      colors: {
        brand: {
          navy: '#102D46',
          navyDark: '#0B1C2D',
          navyLight: '#1B456B',
          red: '#B5121B',
          redDark: '#930E15',
          sky: '#78AED0',
          skyLight: '#E8F2F8',
          neutralBg: '#F8FAFC',
        }
      },
      fontFamily: {
        cairo: ['Cairo', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        'card-soft': '0 10px 30px -5px rgba(16, 45, 70, 0.08), 0 4px 6px -2px rgba(16, 45, 70, 0.04)',
        'btn-hover': '0 12px 25px -4px rgba(16, 45, 70, 0.15)',
      }
    }
  },
  plugins: [
    require('@tailwindcss/forms')
  ]
};
