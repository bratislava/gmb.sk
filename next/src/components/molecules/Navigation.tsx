import cx from 'classnames'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { useTranslation } from 'next-i18next'
import { useEffect, useMemo, useState } from 'react'
import { useWindowSize } from 'usehooks-ts'

import CloseIcon from '@/src/assets/icons/close-x.svg'
import HamburgerIcon from '@/src/assets/icons/menu.svg'
import SearchIcon from '@/src/assets/icons/search.svg'
import Logo from '@/src/assets/images/gmb-logo-header.png'
import AppLangSwitchers from '@/src/components/atoms/AppLangSwitchers'
import Button from '@/src/components/atoms/Button'
import Link from '@/src/components/atoms/Link'
import SkipNavigation from '@/src/components/atoms/SkipNavigation'
import { PageWrapperProps } from '@/src/components/pages/PageWrapper'
import { useGeneralContext } from '@/src/utils/generalContext'
import { getBreakpointValue } from '@/src/utils/getBreakpointValue'
import { getMenuLinkProps } from '@/src/utils/getMenuLinkProps'
import { getParsedMenu } from '@/src/utils/getParsedMenu'

type NavigationProps = Pick<PageWrapperProps, 'page'>

const Navigation = ({ page }: NavigationProps) => {
  const { t, i18n } = useTranslation()

  const router = useRouter()

  const { width: windowWidth } = useWindowSize()
  const { menu } = useGeneralContext()

  // Memoize derived state to avoid unnecessary re-renders
  const menuLinks = useMemo(() => getParsedMenu(menu), [menu])

  const { children: searchLinkLabel, href: searchLinkHref } = getMenuLinkProps(
    menu?.data?.attributes?.searchLink
  )

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    router.events.on('routeChangeStart', closeMobileMenu)

    return () => {
      router.events.off('routeChangeStart', closeMobileMenu)
    }
  }, [router.events])

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
  }

  return (
    <>
      <nav
        aria-label={t('navigation.aria.navAriaLabel')}
        className="fixed inset-x-0 top-0 z-50 flex h-nav w-full bg-white drop-shadow-md"
      >
        <SkipNavigation />

        <div className="mx-xMd flex w-full items-center justify-between gap-x-xMd">
          {/* Logo button */}
          <Link
            href="/"
            preserveStyle
            noUnderline
            aria-label={t('navigation.aria.logoButton')}
            className="group min-w-fit"
          >
            <div className="flex">
              <div className="h-logoHeight w-logoWidth">
                <Image src={Logo} alt="" />
              </div>

              <span
                id="navLogoText"
                aria-hidden
                className="relative ml-4 whitespace-nowrap text-sm leading-[var(--font-size-sm)] group-hover:underline"
              >
                {i18n.language === 'sk' ? t('common.cityGallery') : t('common.bratislavaGenitiv')}
                <br />
                {i18n.language === 'sk' ? t('common.bratislavaGenitiv') : t('common.cityGallery')}
              </span>
            </div>
          </Link>

          {/* Hamburger button */}
          <button
            type="button"
            className="-mr-5 flex p-5 lg:hidden"
            onClick={toggleMobileMenu}
            aria-label={
              isMobileMenuOpen
                ? t('mobileNavigation.aria.closeMenu')
                : t('mobileNavigation.aria.openMenu')
            }
          >
            {isMobileMenuOpen ? (
              <CloseIcon className="dh-[30] dw-[30]" />
            ) : (
              <HamburgerIcon className="ml-[-5] dh-[30] dw-[30]" width={20} height={20} />
            )}
          </button>

          {/* Navigation links */}
          <ul
            className={cx('lg:flex lg:gap-x-xMd', {
              'absolute left-0 top-nav flex w-full flex-col items-center justify-center gap-7 bg-white py-yLg':
                isMobileMenuOpen && (!windowWidth || windowWidth < getBreakpointValue('lg')),
              hidden: !isMobileMenuOpen,
            })}
          >
            {menuLinks.map((menuLink, index) => {
              const { children: label, href, target, hasButtonStyle } = getMenuLinkProps(menuLink)

              const shouldRenderAsButton = hasButtonStyle && menuLinks.length - 1 === index

              return (
                <li key={menuLink.id} className="flex text-center">
                  {shouldRenderAsButton ? (
                    <Button size="small" href={href}>
                      {label}
                    </Button>
                  ) : (
                    <Link href={href} target={target}>
                      {label}
                      {target === '_blank' ? `\u00A0↗\u{0000FE0E}` : ''}
                      {/* Add nbsp and arrow to indicate external link
                      \u{0000FE0E} is Unicode variation selector that prevents symbols to be rendered as emojis on iOS
                      https://stackoverflow.com/questions/8335724/unicode-characters-being-drawn-differently-in-ios5 */}
                    </Link>
                  )}
                </li>
              )
            })}

            <li className="-mx-2 flex px-2">
              <Button
                size="link"
                href={searchLinkHref}
                aria-label={searchLinkLabel ?? t('common.search')}
              >
                <SearchIcon className="dw-[36]" />
              </Button>
            </li>

            <li className="flex w-5 justify-center">
              <AppLangSwitchers page={page} />
            </li>
          </ul>
        </div>
      </nav>

      {/* empty div under navigation header */}
      <div className="relative w-full pb-nav" />
    </>
  )
}

export default Navigation
