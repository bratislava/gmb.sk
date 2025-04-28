import { useToggleState } from '@react-stately/toggle'
import type { AriaCheckboxProps } from '@react-types/checkbox'
import { useRef } from 'react'
import { mergeProps, useCheckbox, useFocusRing, VisuallyHidden } from 'react-aria'

import CheckIcon from '@/src/assets/icons/check.svg'
import cn from '@/src/utils/cn'

/* eslint-disable react/destructuring-assignment */

/**
 * Heavily inspired by https://react-spectrum.adobe.com/react-aria/useCheckbox.html and Tailwind example provided there.
 */
const Checkbox = (
  /* isIndeterminate is not supported */
  props: Omit<AriaCheckboxProps, 'isIndeterminate'> & { hasError?: boolean }
) => {
  const state = useToggleState(props)
  const ref = useRef<HTMLInputElement>(null)
  const { inputProps } = useCheckbox(props, state, ref)
  const { focusProps } = useFocusRing()

  const isDisabledOrReadonly = props.isDisabled || props.isReadOnly
  const checkboxClassName = cn(
    'mr-[14px] grid h-[var(--font-size-btn)] w-[var(--font-size-btn)] shrink-0 place-content-center border-2 text-black',
    {
      'border-white': !props.hasError,
      'bg-white': !props.hasError && props.isSelected,
      'bg-transparent': !props.isSelected,
    }
  )

  const labelClassName = cn('group flex items-center', { 'cursor-pointer': !isDisabledOrReadonly })

  return (
    // The eslint rule itself suggests nesting `input` inside the `label`, but is not able to detect it.
    // eslint-disable-next-line jsx-a11y/label-has-associated-control
    <label className={labelClassName}>
      <VisuallyHidden>
        <input {...mergeProps(inputProps, focusProps)} ref={ref} />
      </VisuallyHidden>
      <div className={checkboxClassName} aria-hidden="true">
        {props.isSelected && <CheckIcon />}
      </div>
      <span className="text-sm">{props.children}</span>
    </label>
  )
}
/* eslint-enable react/destructuring-assignment */

export default Checkbox
