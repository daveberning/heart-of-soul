/*
 ** TailwindCSS Configuration File
 **
 ** Docs: https://tailwindcss.com/docs/configuration
 ** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
 */

module.exports = {
  theme: {
    darkMode: 'class',
    extend: {
      fontFamily: {
        sans: ['Inter']
      },
      colors: {
        primary: {
          100: '#E8E0F2',
          200: '#D9C0E9',
          300: '#C99FE0',
          400: '#B97ED7',
          500: '#A85DD0',
          DEFAULT: '#401466',
          600: '#8A3CBE',
          700: '#6F2FAB',
          800: '#5B2493',
          900: '#2F0F4C'
        },
        secondary: {
          100: '#E0F2F2',
          200: '#B2E9E9',
          300: '#80E0E0',
          400: '#4ED7D7',
          500: '#1FB8A7',
          DEFAULT: '#1FB8A7',
          600: '#1A9A8F',
          700: '#147E77',
          800: '#0F625F',
          900: '#0A3F3B'
        },
        tertiary: {
          100: '#F2E0E0',
          200: '#E9B2B2',
          300: '#E08080',
          400: '#D74E4E',
          500: '#A71F1F',
          DEFAULT: '#A61020',
          600: '#8F0F1A',
          700: '#77147E',
          800: '#5F0F62',
          900: '#3B0A3F'
        },
        cta: {
          DEFAULT: '#E6B83F',
        }
      },
      screens: {
        xs: '480px' // Added xs
        // 'sm': '640px',
        // 'md': '768px',
        // 'lg': '1024px',
        // 'xl': '1280px',
      }
    }
  },
  plugins: [],
  content: [ // Learn more on https://tailwindcss.com/docs/content-configuration
    'components/**/*.vue',
    'layouts/**/*.vue',
    'pages/**/*.vue',
    'plugins/**/*.js',
    // 'nuxt.config.js'
  ],
  safelist: [],
}
