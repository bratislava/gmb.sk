import { Breakpoint, screens } from "@/src/utils/screens"

export const getBreakpointValue = (value: Breakpoint): number => {
  if (value in screens) {
    return Number(screens[value].slice(0, screens[value].indexOf('px')))
  }

  return 0
}
