import { MenuLinkItemFragment } from '@/src/services/graphql'

/**
 * Inspired by OLO: https://github.com/bratislava/olo.sk/blob/master/next/src/utils/useGetLinkProps.ts
 */

export const getMenuLinkProps = (link: MenuLinkItemFragment | null | undefined) => {
  let href = '#'
  let label = link?.title ?? ''
  let target: '_blank' | undefined

  if (!link) {
    return { children: label, href } // TODO?
  }

  console.log('menu link', link)

  if ('mainPage' in link && link.mainPage?.data?.attributes) {
    label = link.title ?? link.mainPage.data.attributes.title
    href = `/${link.mainPage.data.attributes.slug}`
  } else if ('contentPage' in link && link.contentPage?.data?.attributes) {
    label = link.title ?? link.contentPage.data.attributes.title
    href = `/detail/${link.contentPage.data.attributes.slug}`
  } else if (link.url) {
    label = link.title ?? link.url
    href = link.url
    target = href.startsWith('http') ? '_blank' : undefined
  }

  return { children: label, href, target, hasButtonStyle: link.hasButtonStyle }
}
