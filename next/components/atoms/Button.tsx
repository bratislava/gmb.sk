import cx from 'classnames'
import React from 'react'

import Link from './Link'

type ButtonProps = React.DetailedHTMLProps<React.AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement> &
  React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> & {
    size?: 'small' | 'medium' | 'link'
    className?: string
    color?: 'dark' | 'light'
  }

const Button = ({ className, children, size = 'medium', onClick, href, color = 'dark', id, ...rest }: ButtonProps) => {
  const styles = {
    className: cx(className, 'flex text-center justify-center border-solid border-2 uppercase text-btn font-medium', {
      'px-[calc(40px*var(--icon-size-factor))] py-[calc(14px*var(--icon-size-factor))]': size === 'small',
      'px-[calc(100px*var(--icon-size-factor))] py-[calc(18px*var(--icon-size-factor))]': size === 'medium',
      'text-nav uppercase hover:underline underline-offset-2': size === 'link',
      'text-gmbDark border-gmbDark hover:bg-gmbDark hover:text-white': color === 'dark' && size !== 'link',
      'text-white border-white hover:bg-white hover:text-gmbDark': color === 'light' && size !== 'link',
      'text-gmbDark border-none': color === 'dark' && size === 'link',
      'text-white border-none': color === 'light' && size === 'link',
    }),
  }

  if (href && href.length > 0) {
    return (
      <Link href={href} id={id} role="button" {...styles} {...rest} preserveStyle noUnderline>
        {children}
      </Link>
    )
  }

  return (
    <button type="button" onClick={onClick} id={id} {...rest} {...styles}>
      {children}
    </button>
  )
}

export default Button
