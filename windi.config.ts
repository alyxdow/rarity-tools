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
    },
  },
})
