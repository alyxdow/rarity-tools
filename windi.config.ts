import { defineConfig } from 'windicss/helpers'

// prettier-ignore
export default defineConfig({
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary         : '#42FFC6',
        secondary       : '#F3BBF9',
        'primary-light' : '#B6FFE0',
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
        'header' : '0px -4px 24px rgba(0, 0, 0, 0.1)',
        'menu'   : '-2px 6px 11px rgba(0, 0, 0, 0.1)',
      },

      fontFamily: {
        body   : [`"Suisse Int'l Regular"`,      'sans-serif'],
        info   : ["'Euclid Circular A Regular'", 'sans-serif'],
        number : ['Roboto',                      'sans-serif'],

        body500 : [`"Suisse Int'l Medium"`,      'sans-serif'],
        body700 : [`"Suisse Int'l Bold"`,        'sans-serif'],

        info300 : ['Euclid Circular A Light',    'sans-serif'],
        info500 : ['Euclid Circular A Medium',   'sans-serif'],
        info600 : ['Euclid Circular A SemiBold', 'sans-serif'],
        info700 : ['Euclid Circular A Bold',     'sans-serif'],
      },

      fontSize: {
        base     : '10px'   ,
        biggest  : '20px'   ,
        bigger   : '19.02px',
        big      : '15px'   ,
        medium   : '12.68px',
        small    : '9.97px' ,
        smaller  : '8px'    ,
        smallest : '6px'    ,
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
