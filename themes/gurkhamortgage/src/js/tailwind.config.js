const spacedItems = require('tailwindcss-spaced-items')
module.exports = {
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '992px',
      xl: '1240px',
      xll: '1400px',
    },
    colors: {
      primary: 'var(--primary)',
      secondary: 'var(--secondary)',
      'black-dark': 'var(--black-dark)',
      'white': 'var(--white)',
      'light-white': 'var(--light-white)',
      'base-color': 'var(--base-color)'
    },
    fontFamily: {
      body: ['Poppins', 'sans-serif'],
    },
    fontSize: {
      '12': '12px',
      '14': '14px',
      '16': '16px',
      '18': '18px',
      '24': '24px',
      '36': '36px',
      '48': '48px',
      '54': '54px',
    },
    spacing: {
      '0': '0',
      '8': '8px',
      '16': '16px',
      '24': '24px',
      '32': '32px',
      '40': '40px',
      '48': '48px',
      '56': '56px',
      '60': '60px',
      '90': '90px',
      '120': '120px',
      '200': '200px',
    },
    opacity: {
      '0': '0',
      '20': '0.2',
      '40': '0.4',
      '60': '0.6',
      '80': '0.8',
      '100': '1'
    }
  },
  variants: {
    fontSize: ['responsive', 'hover', 'focus'],
  },
  plugins: [
    spacedItems({
      values: {
        '5': '5px',
        '10': '10px',
        '20': '20px',
        '30': '30px',
      }
    })
  ]
};
