import clsx, { type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

/**
 * Based on OLO: https://github.com/bratislava/olo.sk/blob/master/next/src/utils/cn.ts
 * Inspired by: https://ui.shadcn.com/docs/installation/manual
 */

const cn = (...args: ClassValue[]) => {
  return twMerge(clsx(...args))
}

export default cn
