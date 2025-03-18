import cx from 'classnames'
import NextLink from 'next/link'
import { useTranslation } from 'next-i18next'
import { ReactNode } from 'react'

import { getRouteForLocale, isOfTypeRoute } from '@/src/utils/localeRoutes'

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
  stretched?: boolean
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
  stretched = false,
  ...rest
}: LinkProps) => {
  const { i18n } = useTranslation()

  if (!href) {
    return null
  }

  if (!href.startsWith('http')) {
    let isFromRoot = false
    if (href[0] === '/') {
      isFromRoot = true
    }
    const [route, ...restRoute] = href.split(/(?=\/)/g)
    let translatedRoute = route
    if (isFromRoot && isOfTypeRoute(route)) {
      translatedRoute = getRouteForLocale(route, locale || i18n.language || 'sk')
    }
    // eslint-disable-next-line no-param-reassign
    href = `${[translatedRoute, ...restRoute].join('')}`
  }

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    // Prevent propagation, e.g. when Link is used for tags on Card
    e.stopPropagation()
    if (onClick) {
      onClick(e)
    }
  }

  return (
    <NextLink
      href={href}
      locale={locale}
      replace={replace}
      target={target}
      rel={rel}
      onClick={handleClick}
      {...rest}
      className={cx(
        {
          'group flex cursor-pointer items-center text-nav uppercase': !preserveStyle,
          'underline-offset-2 hover:underline': !noUnderline,
          'after:absolute after:inset-0': stretched,
        },
        className
      )}
    >
      {children}
    </NextLink>
  )
}

export default Link
