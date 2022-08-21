const plugin = require('tailwindcss/plugin')

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

const dynamicSizing = plugin(({ matchUtilities }) => {
  matchUtilities({
    dw: (value) => ({
      width: `calc(${value}*var(--icon-size-factor))`,
    }),
    dh: (value) => ({
      height: `calc(${value}*var(--icon-size-factor))`,
    }),
  })
})

module.exports = {
  content: ['./pages/**/*.{js,jsx,ts,tsx}', './components/**/*.{js,jsx,ts,tsx}'],
  plugins: [scrollBarHide, dynamicSizing, require('@tailwindcss/line-clamp'), require('@tailwindcss/aspect-ratio')],
  corePlugins: {
    container: false,
    aspectRatio: false, // https://tailwindcss.com/docs/aspect-ratio#browser-support
  },
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
        gmbGray: '#757575',
        white: '#ffffff',
      },
      spacing: {
        xSm: 'var(--padding-x-sm)',
        xMd: 'var(--padding-x-md)',
        xLg: 'var(--padding-x-lg)',
        ySm: 'var(--padding-y-sm)',
        yMd: 'var(--padding-y-md)',
        yLg: 'var(--padding-y-lg)',
        yXl: 'var(--padding-y-xl)',
        nav: 'var(--height-nav)',
        sidepanel: 'var(--sidepanel-width)',
        ticketSidebar: 'var(--ticket-sidebar-width)',
        logoHeight: 'var(--logo-height)',
        logoWidth: 'var(--logo-width)',
      },
      minHeight: {
        ticket: 'var(--height-ticket)',
      },
    },
  },
}
