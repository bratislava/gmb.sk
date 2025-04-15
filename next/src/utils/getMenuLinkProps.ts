import { MenuLinkItemFragment } from '@/src/services/graphql'

/**
 * Inspired by OLO: https://github.com/bratislava/olo.sk/blob/master/next/src/utils/useGetLinkProps.ts
 */

export const getMenuLinkProps = (link: MenuLinkItemFragment | null | undefined) => {
  const { title, slug } = link?.mainPage?.data?.attributes ?? {}

  const href = link?.url ?? (slug && `/${slug}`) ?? '#' // Add a leading slash to ensure that the link is an absolute path
  const label = link?.title ?? title ?? ''
  const target = href.startsWith('http') ? '_blank' : '_self'

  if (!link) {
    return { children: label, href } // TODO
  }

  return {
    children: label,
    href,
    target,
    hasButtonStyle: link?.hasButtonStyle,
  }
}
