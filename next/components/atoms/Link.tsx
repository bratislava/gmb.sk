import cx from 'classnames'
import NextLink from 'next/link'
import { isDefined } from '../../utils/isDefined'

type LinkProps = React.ComponentPropsWithoutRef<'a'> & {
  locale?: string
  className?: string
  href: string
  target?: string
  rel?: string
  children: React.ReactNode
  replace?: boolean
  preserveStyle?: boolean
  noUnderline?: boolean
}

export const Link = ({
  href,
  className,
  children,
  locale,
  target,
  rel,
  replace,
  preserveStyle,
  noUnderline,
  onClick,
}: LinkProps) => {
  if (!isDefined(href)) return null

  return (
    <NextLink href={href} locale={locale} replace={replace}>
      <a
        target={target}
        rel={rel}
        href={href}
        onClick={onClick}
        className={cx(
          {
            'flex items-center uppercase cursor-pointer text-nav group': !preserveStyle,
            'hover:underline underline-offset-2': !noUnderline,
          },
          className
        )}
      >
        {children}
      </a>
    </NextLink>
  )
}

export default Link
