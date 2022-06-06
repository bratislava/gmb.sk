const { join } = require('path');

// available since Nx v 12.5
const { createGlobPatternsForDependencies } = require('@nrwl/next/tailwind');

module.exports = {
  // TODO remove this preset, because it is overriding some presets by 'extend' part
  presets: [require('../../../libs/ui/bratislava/tailwind.config')],
  purge: [
    join(__dirname, 'pages/**/*.{js,ts,jsx,tsx}'),
    join(__dirname, 'components/**/*.{js,ts,jsx,tsx}'),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  content: [
    join(__dirname, 'pages/**/*.{js,ts,jsx,tsx}'),
    join(__dirname, 'components/**/*.{js,ts,jsx,tsx}'),
    ...createGlobPatternsForDependencies(__dirname),
  ],
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
      // added because otherwise it's overridden by bratislava config
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
};
