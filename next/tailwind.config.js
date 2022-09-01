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
      xs: '374px', // phone portrait, design was made for 374px
      sm: '640px', // phone landscape
      md: '768px', // iPad portrait
      lg: '1024px', // iPad landscape
      xl: '1280px', // small desktop
      '1.5xl': '1366px', // medium desktop
      '2xl': '1536px', // bigger desktop
      '3xl': '1920px', // large desktop full hd - the most standard
      '4xl': '2560px', // extra large desktop
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
    },
  },
}
