const plugin = require('tailwindcss/plugin')
const screens = require('./tailwind.config.screens')

/** This utility helps us to fluidly determine the sizes, e.g. for icons, paddings, margins, etc.
 *  It computes factor in rem. Use it as dw-[size] where size is the desired size on FHD screen (3xl) in pixels.
 *  Use it without units (e.g. dw-[30], not dw-[30px])
 */
const dynamicSizing = plugin(({ matchUtilities }) => {
  matchUtilities({
    dw: (value) => ({
      width: `calc(${value}*var(--size-factor))`,
    }),
    dh: (value) => ({
      height: `calc(${value}*var(--size-factor))`,
    }),
  })
})

const customVariants = plugin(function ({ addVariant }) {
  addVariant('not-first', '&:not(:first-child)')
  addVariant('not-last', '&:not(:last-child)')
})

module.exports = {
  content: ['./pages/**/*.{js,jsx,ts,tsx}', './components/**/*.{js,jsx,ts,tsx}'],
  plugins: [dynamicSizing, customVariants, require('tailwind-scrollbar-hide')],
  corePlugins: {
    container: false,
  },
  theme: {
    screens,
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
        nav: 'var(--nav-height)',
        sidepanel: 'var(--sidepanel-width)',
        ticketSidebar: 'var(--ticket-sidebar-width)',
        logoHeight: 'var(--logo-height)',
        logoWidth: 'var(--logo-width)',
      },
      minHeight: {
        ticket: 'var(--ticket-height)',
        chessboardTile: 'var(--chessboard-height)',
      },
      aspectRatio: {
        '4/3': '4 / 3',
      },
    },
  },
}
