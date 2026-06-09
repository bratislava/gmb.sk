import { type ClassValue, clsx } from 'clsx'
import { extendTailwindMerge } from 'tailwind-merge'

/**
 * Based on OLO: https://github.com/bratislava/olo.sk/blob/master/next/src/utils/cn.ts
 * Inspired by: https://ui.shadcn.com/docs/installation/manual
 */

const twMerge = extendTailwindMerge({
  extend: {
    // Add custom theme values, keep in sync with globals.css
    theme: {
      // Custom breakpoints
      breakpoint: ['xs', 'sm', 'md', 'lg', 'xl', '2xl'],
      // Custom colors
      color: ['transparent', 'current', 'white', 'black', 'gmbDark', 'gmbLightGray', 'gmbGray'],
    },
    classGroups: {
      // Keep in sync with classes in globals.css
      'font-size': ['text-xxl, text-xl', 'text-lg', 'text-md', 'text-sm', 'text-nav', 'text-btn'],
      'font-weight': ['font-regular', 'font-heavy'],
    },
  },
})

const cn = (...args: ClassValue[]) => {
  return twMerge(clsx(args))
}

export default cn
