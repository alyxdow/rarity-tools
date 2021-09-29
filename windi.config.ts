import { defineConfig } from 'windicss/helpers'

// prettier-ignore
export default defineConfig({
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary         : '#42FFC6',
        'primary-light' : '#B6FFE0',
        secondary       : '#F3BBF9',
        black           : '#000000',
        white           : '#ffffff',
        'gray-light'    : '#F2F4F8',
        'blue-gray'     : '#B6C0D5',
      },

      screens: {
        '3sm': { max: '380px' },
        '2sm': { min: '381px' },
        '2md': { min: '832px' },
      },

      boxShadow: {
        'header': '0px -4px 24px rgba(0, 0, 0, 0.1)',
      },

      fontFamily: {
        body:   [`"Suisse Int'l Regular"`,      'sans-serif'],
        info:   ["'Euclid Circular A Regular'", 'sans-serif'],
        number: ['Roboto',                      'sans-serif'],
      },

      fontSize: {
        mobile: '10px',
        desktop: '15px',
      },

      fontWeight: {
        'semi-bold': 600,
      },

      lineHeight: {
        base: '12,68px',
        semibold: '12,97px'
      },
    },
  },
})
