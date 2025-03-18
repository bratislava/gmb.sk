import cx from 'classnames'

import Link from '@/src/components/atoms/Link'

type ButtonProps = React.DetailedHTMLProps<
  React.AnchorHTMLAttributes<HTMLAnchorElement>,
  HTMLAnchorElement
> &
  React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> & {
    size?: 'small' | 'medium' | 'link'
    className?: string
    color?: 'dark' | 'light'
    stretched?: boolean
    groupHover?: boolean
  }

const Button = ({
  className,
  children,
  size = 'medium',
  onClick,
  href,
  color = 'dark',
  stretched = false,
  groupHover = false,
  id,
  ...rest
}: ButtonProps) => {
  const styles = {
    className: cx(
      className,
      'flex justify-center border-2 border-solid text-center text-btn font-medium uppercase',
      {
        'px-[calc(40*var(--size-factor))] py-[calc(14*var(--size-factor))]': size === 'small',
        'px-[calc(100*var(--size-factor))] py-[calc(18*var(--size-factor))]': size === 'medium',
        'text-nav uppercase underline-offset-2 hover:underline focus:underline': size === 'link',
        'group-hover:underline': groupHover && size === 'link',
        'border-gmbDark text-gmbDark hover:bg-gmbDark hover:text-white focus:bg-gmbDark focus:text-white':
          color === 'dark' && size !== 'link',
        'group-hover:bg-gmbDark group-hover:text-white':
          groupHover && color === 'dark' && size !== 'link',
        'border-white text-white hover:bg-white hover:text-gmbDark focus:bg-white focus:text-gmbDark':
          color === 'light' && size !== 'link',
        'group-hover:bg-white group-hover:text-gmbDark':
          groupHover && color === 'light' && size !== 'link',
        'border-none text-gmbDark': color === 'dark' && size === 'link',
        'border-none text-white': color === 'light' && size === 'link',
        'after:absolute after:inset-0': stretched,
      }
    ),
  }

  if (href && href.length > 0) {
    return (
      <Link href={href} id={id} {...styles} {...rest} preserveStyle noUnderline>
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
