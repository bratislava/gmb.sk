import cx from 'classnames'
import { useTranslation } from 'next-i18next'
import NextLink from 'next/link'
import { getRouteForLocale, isOfTypeRoute } from '../../utils/localeRoutes'

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
