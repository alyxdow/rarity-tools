import { defineConfig } from 'windicss/helpers'

// prettier-ignore
export default defineConfig({
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary:         '#42FFC6',
        'primary-light': '#B6FFE0',
        black:           '#000000',
        white:           '#ffffff',
        'gray-light':    '#F2F4F8',
        'blue-gray':     '#B6C0D5',
      },

      screens: {
        '3sm': { max: '380px' },
        '2sm': { min: '381px' },
      },

      boxShadow: {
        'header': '0px -4px 24px rgba(0, 0, 0, 0.1)',
      },

      fontFamily: {
        body:   [`"Suisse Int'l"`,      'sans-serif'],
        info:   ["'Euclid Circular A'", 'sans-serif'],
        number: ['Roboto',              'sans-serif'],
      },

      fontSize: {
        mobile: '10px',
        desktop: '15px',
      },

      fontWeight: {
        semibold: 500,
      },

      lineHeight: {
        base: '12,68px',
        semibold: '12,97px'
      },
    },
  },
})
