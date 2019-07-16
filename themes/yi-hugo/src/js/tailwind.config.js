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
      secondary: 'var(--primary)'
    },
    fontFamily: {
      body: ['Open Sans', 'sans-serif'],
    },
    fontSize: {
      'tiny': '12px',
      'base': '16px',
      'md': '24px',
      'lg': '48px',
      'hero-title-sm': '48px',
      'hero-title-md': '72px',
      'hero-title-lg': '90px',
    },
    spacing: {
      '8': '8px',
      '16': '16px',
      '24': '24px',
      '32': '32px',
      '40': '40px',
      '48': '48px'
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
        '20': '20px'
      }
    })
  ]
};
