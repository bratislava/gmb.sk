const plugin = require('tailwindcss/plugin')
const { join } = require('path')

const scrollBarHide = plugin(function ({ addUtilities }) {
  addUtilities({
    '.scrollbar-hide': {
      /* Firefox */
      'scrollbar-width': 'none',

      /* Safari and Chrome */
      '&::-webkit-scrollbar': {
        display: 'none',
      },
    },
  })
})

module.exports = {
  content: [join(__dirname, 'pages/**/*.{js,jsx,ts,tsx}'), join(__dirname, 'components/**/*.{js,jsx,ts,tsx}')],
  darkMode: 'media', // or 'class'
  theme: {
    fontSize: {
      xxl: ['var(--font-size-xxl)', 'var(--line-height-xxl)'],
      xl: ['var(--font-size-xl)', 'var(--line-height-xl)'],
      lg: ['var(--font-size-lg)', 'var(--line-height-lg)'],
      md: ['var(--font-size-md)', 'var(--line-height-mg)'],
      sm: ['var(--font-size-sm)', 'var(--line-height-sm)'],
      xs: ['var(--font-size-xs)', 'var(--line-height-xs)'],
      nav: ['var(--font-size-nav)', 'var(--line-height-nav)'],
      btn: ['var(--font-size-btn)', 'var(--line-height-btn)'],
    },
    fontWeight: {
      light: '300',
      regular: '400',
      medium: '500',
      semibold: '600',
      bold: '700',
      heavy: '900',
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
      '3xl': '1920px',
    },
    extend: {
      colors: {
        gmbDark: '#141414',
        gmbLightGray: '#efefef',
        gmbGray: '#a0a0a0',
        white: '#ffffff',
      },
      spacing: {
        xStandard: 'var(--padding-x)',
        yStandard: 'var(--padding-y)',
        yHigh: 'var(--padding-y-high)',
        nav: 'var(--height-nav)',
        sidepanel: 'var(--sidepanel-width)',
        logoHeight: 'var(--logo-height)',
        logoWidth: 'var(--logo-width)',
      },
    },
  },
  corePlugins: {
    container: false,
  },
  mode: 'jit',
  plugins: [scrollBarHide],
}
