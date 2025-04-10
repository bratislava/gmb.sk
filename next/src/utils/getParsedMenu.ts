import { GeneralQuery, MenuLinkItemFragment } from '@/src/services/graphql'
import { isDefined } from '@/src/utils/isDefined'

export const getParsedMenu = (menu: GeneralQuery['menu']) => {
  const menuLinks = menu?.data?.attributes?.menuLinks ?? []

  return menuLinks
    .filter(isDefined)
    .map((menuLink: MenuLinkItemFragment) => {
      const { title, slug } = menuLink?.mainPage?.data?.attributes ?? {}

      return {
        id: menuLink.id,
        title: menuLink?.title,
        url: menuLink?.url,
        mainPage: {
          title,
          slug,
        },
        hasButtonStyle: menuLink?.hasButtonStyle,
      }
    })
    .filter(isDefined)
}
