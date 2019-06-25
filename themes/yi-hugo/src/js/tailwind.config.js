const { colors } = require('tailwindcss/defaultTheme')

module.exports = {
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '992px',
      xl: '1240px',
      xll: '1400px',
    },
    fontFamily: {
      body: ['Fira Sans', 'sans-serif'],
    },
    colors: {
      white: '#fff',
      'grey': '#565656',
      'base-color': 'var(--color-text-base-color)',
      'primary-background': "var(--color-bg-primary)",
      'primary-text': "var(--color-text-primary)",
      'base-link': "var(--color-base-link)",
    },
    extend: {
      spacing: {
        '96': '24rem',
        '128': '32rem',
      }
    },
  },
  variants: {},
  plugins: []
};
