import { useEffect, useRef } from 'react'

/**
 * A custom useEffect hook that only triggers on updates, not on initial mount
 */
export default function useUpdateEffect(effect: () => void, dependencies: unknown[] = []) {
  const isInitialMount = useRef(true)

  // eslint-disable-next-line consistent-return
  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false
    } else {
      return effect()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, dependencies)
}
