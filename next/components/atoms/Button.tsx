import cx from 'classnames'
import React from 'react'

import Link from './Link'

type ButtonProps = React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> & {
  size?: 'small' | 'medium' | 'link'
  href?: string
  className?: string
  color?: 'dark' | 'light'
  id?: string
}

const Button = ({ className, children, size = 'medium', onClick, href, color = 'dark', id, ...rest }: ButtonProps) => {
  const styles = {
    className: cx(className, 'flex text-center justify-center border-solid border-2 uppercase text-btn font-medium', {
      'px-[24px] py-[10px] lg:px-[28px] lg:py-[11px] 3xl:px-[32px] 3xl:py-[12px]': size === 'small',
      'px-[38px] py-[12px] lg:px-[50px] lg:py-[13px] 3xl:px-[64px] 3xl:py-[14px]': size === 'medium',
      'text-nav uppercase hover:underline underline-offset-2': size === 'link',
      'text-gmbDark border-gmbDark hover:bg-gmbDark hover:text-white': color === 'dark' && size !== 'link',
      'text-white border-white hover:bg-white hover:text-gmbDark': color === 'light' && size !== 'link',
      'text-gmbDark border-none': color === 'dark' && size === 'link',
      'text-white border-none': color === 'light' && size === 'link',
    }),
  }

  if (href && href.length > 0) {
    return (
      <Link href={href} id={id} role="button" {...styles} preserveStyle noUnderline>
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
