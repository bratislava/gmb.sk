import cx from 'classnames'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { useTranslation } from 'next-i18next'
import { useEffect, useState } from 'react'
import { useWindowSize } from 'usehooks-ts'

import CloseIcon from '@/src/assets/icons/close-x.svg'
import HamburgerIcon from '@/src/assets/icons/menu.svg'
import SearchIcon from '@/src/assets/icons/search.svg'
import Logo from '@/src/assets/images/gmb-logo-header.png'
import AppLangSwitchers from '@/src/components/atoms/AppLangSwitchers'
import Button from '@/src/components/atoms/Button'
import Link from '@/src/components/atoms/Link'
import SkipNavigation from '@/src/components/atoms/SkipNavigation'
import SearchBar from '@/src/components/molecules/SearchBar'
import { ContentPageEntityFragment } from '@/src/services/graphql'
import { getBreakpointValue } from '@/src/utils/getBreakpointValue'
import { WithAttributes } from '@/src/utils/isDefined'

interface NavigationProps {
  contentPage?: WithAttributes<ContentPageEntityFragment>
}

const Navigation = ({ contentPage }: NavigationProps) => {
  const { t, i18n } = useTranslation()
  const router = useRouter()
  const { width: windowWidth } = useWindowSize()

  const [isSearchBarOpen, setIsSearchBarOpen] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const menuLinks = [
    {
      href: '/vystavy',
      label: t('navigation.exhibitionsEvents'),
    },
    {
      href: '/objavujte',
      label: t('navigation.explore'),
    },
    {
      href: '/o-galerii',
      label: t('navigation.aboutGallery'),
    },
    {
      href: '/zapojte-sa',
      label: t('navigation.getInvolved'),
    },
    {
      href: '/zbierky',
      label: t('navigation.collections'),
    },
  ]

  useEffect(() => {
    router.events.on('routeChangeStart', closeMobileMenu)

    return () => {
      router.events.off('routeChangeStart', closeMobileMenu)
    }
  }, [router.events])

  useEffect(() => {
    router.events.on('routeChangeComplete', closeSearchBar)

    return () => {
      router.events.off('routeChangeComplete', closeSearchBar)
    }
  }, [router.events])

  useEffect(() => {
    document.body.style.overflow = isSearchBarOpen ? 'hidden' : 'auto'
    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [isSearchBarOpen])

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
  }

  const toggleSearchBar = () => {
    setIsSearchBarOpen(!isSearchBarOpen)
    if (isMobileMenuOpen) {
      closeMobileMenu()
    }
  }

  const closeSearchBar = () => {
    setIsSearchBarOpen(false)
  }

  return (
    <>
      <nav className="fixed inset-x-0 top-0 z-50 flex h-nav w-full bg-white drop-shadow-md">
        <SkipNavigation />

        <div className="mx-xMd flex w-full items-center justify-between gap-x-xMd">
          <Link href="/" preserveStyle noUnderline className="group min-w-fit">
            <div className="flex">
              <div className="h-logoHeight w-logoWidth">
                <Image src={Logo} alt="Logo GMB" />
              </div>

              <span
                id="navLogoText"
                className="relative ml-4 whitespace-nowrap text-sm leading-[var(--font-size-sm)] group-hover:underline"
              >
                {i18n.language === 'sk' ? t('common.cityGallery') : t('common.bratislavaGenitiv')}
                <br />
                {i18n.language === 'sk' ? t('common.bratislavaGenitiv') : t('common.cityGallery')}
              </span>
            </div>
          </Link>

          <button
            type="button"
            className="-mr-5 flex p-5 lg:hidden"
            onClick={toggleMobileMenu}
            aria-label="Menu"
          >
            {isMobileMenuOpen ? (
              <CloseIcon className="dh-[30] dw-[30]" />
            ) : (
              <HamburgerIcon className="ml-[-5] dh-[30] dw-[30]" width={20} height={20} />
            )}
          </button>

          <div
            className={cx('lg:flex lg:gap-x-xMd', {
              'absolute left-0 top-nav flex w-full flex-col items-center justify-center gap-7 bg-white py-yLg':
                isMobileMenuOpen && (!windowWidth || windowWidth < getBreakpointValue('lg')),
              hidden: !isMobileMenuOpen,
            })}
          >
            {menuLinks.map((menuLink) => {
              const isExternal = menuLink.href.startsWith('http')

              // Add nbsp and arrow to indicate external link
              // \u{0000FE0E} is Unicode variation selector that prevents symbols to be rendered as emojis on iOS
              // https://stackoverflow.com/questions/8335724/unicode-characters-being-drawn-differently-in-ios5

              return (
                <Link
                  href={menuLink.href}
                  className="text-center"
                  target={isExternal ? '_blank' : undefined}
                >
                  {menuLink.label}
                  {isExternal ? `\u00A0↗\u{0000FE0E}` : ''}
                </Link>
              )
            })}

            <Button size="small" href="/navstivte">
              {t('navigation.visitUs')}
            </Button>

            <button
              type="button"
              className="-mx-2 px-2"
              onClick={toggleSearchBar}
              aria-label={t('common.search')}
            >
              <SearchIcon className="dw-[36]" />
            </button>

            <div className="flex w-5 justify-center">
              <AppLangSwitchers contentPage={contentPage} />
            </div>
          </div>
        </div>
      </nav>

      {/* empty div under navigation header */}
      <div className="relative w-full pb-nav" />

      {isSearchBarOpen && <SearchBar closeSearchBar={closeSearchBar} />}
    </>
  )
}

export default Navigation
