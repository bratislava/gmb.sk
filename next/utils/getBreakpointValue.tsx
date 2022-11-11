import resolveConfig from 'tailwindcss/resolveConfig'
import { KeyValuePair } from 'tailwindcss/types/config'

import tailwindConfig from '../tailwind.config'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const fullConfig = resolveConfig(tailwindConfig as any)

export const getBreakpointValue = (value: string): number => {
  const screens = fullConfig.theme?.screens as KeyValuePair<string, string>
  if (screens && screens[value]) {
    return +screens[value].slice(0, screens[value].indexOf('px'))
  }
  return 0
}
