import cx from 'classnames'
import NextLink from 'next/link'
import { useTranslation } from 'next-i18next'
import { ReactNode } from 'react'

import { getRouteForLocale, isOfTypeRoute } from '../../utils/localeRoutes'

type LinkProps = React.ComponentPropsWithoutRef<'a'> & {
  locale?: string
  className?: string
  href: string
  target?: string
  rel?: string
  children: ReactNode
  replace?: boolean
  preserveStyle?: boolean
  noUnderline?: boolean
}

const Link = ({
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
  ...rest
}: LinkProps) => {
  const { i18n } = useTranslation()

  if (!href) return null

  if (!href.startsWith('http')) {
    let isFromRoot = false
    if (href[0] === '/') {
      isFromRoot = true
    }
    const [route, ...rest] = href.split(/(?=\/)/g)
    let translatedRoute = route
    if (isFromRoot && isOfTypeRoute(route)) {
      translatedRoute = getRouteForLocale(route, locale || i18n.language || 'sk')
    }
    href = `${[translatedRoute, ...rest].join('')}`
  }

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    // Prevent propagation, e.g. when Link is used for tags on Card
    e.stopPropagation()
    if (onClick) {
      onClick(e)
    }
  }

  return (
    <NextLink href={href} locale={locale} replace={replace}>
      <a
        target={target}
        rel={rel}
        href={href}
        onClick={handleClick}
        {...rest}
        className={cx(
          {
            'group flex cursor-pointer items-center text-nav uppercase': !preserveStyle,
            'underline-offset-2 hover:underline': !noUnderline,
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
