import cx from 'classnames'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import { useTranslation } from 'next-i18next'
import Image from 'next/image'
import { useRouter } from 'next/router'
import React from 'react'

import Hamburger from '../../assets/icons/ba-hamburger.svg'
import CloseIcon from '../../assets/icons/close-x.svg'
import SearchIcon from '../../assets/icons/search.svg'
import Logo from '../../assets/images/gmb-logo-header.png'
import { ContentPageEntityFragment } from '../../graphql'
import { withAttributes } from '../../utils/isDefined'
import AppLangSwitchers from '../atoms/AppLangSwitchers'
import Button from '../atoms/Button'
import Link from '../atoms/Link'
import NavLink from '../atoms/NavLink'
import SearchBar from './SearchBar'

interface NavigationProps {
  contentPage?: ContentPageEntityFragment
}

const Navigation = ({ contentPage }: NavigationProps) => {
  const { t, i18n } = useTranslation()
  const router = useRouter()

  const [isSearchBarOpen, setIsSearchBarOpen] = React.useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false)

  gsap.registerPlugin(ScrollTrigger)
  React.useEffect(() => {
    gsap.to('#navLogoText', {
      bottom: '+=120',
      ease: 'none',
      scrollTrigger: {
        trigger: 'main',
        start: 'top -250px',
        end: 'top -370px',
        scrub: 0,
      },
    })
  }, [])

  React.useEffect(() => {
    router.events.on('routeChangeStart', closeMobileMenu)

    return () => {
      router.events.off('routeChangeStart', closeMobileMenu)
    }
  }, [router.events])

  React.useEffect(() => {
    router.events.on('routeChangeComplete', closeSearchBar)

    return () => {
      router.events.off('routeChangeComplete', closeSearchBar)
    }
  }, [router.events])

  React.useEffect(() => {
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
        <div className="mx-xMd flex w-full items-center justify-between">
          <Link href="/" preserveStyle noUnderline className="group min-w-fit">
            <div className="flex">
              <div className="h-logoHeight w-logoWidth">
                <Image src={Logo} alt="Logo GMB" objectFit="scale-down" unoptimized />
              </div>

              <span
                id="navLogoText"
                className="absolute ml-4 whitespace-nowrap pl-logoWidth text-sm group-hover:underline"
              >
                {i18n.language === 'sk' ? t('common.cityGallery') : t('common.bratislavaGenitiv')}
                <br />
                {i18n.language === 'sk' ? t('common.bratislavaGenitiv') : t('common.cityGallery')}
              </span>
            </div>
          </Link>

          <button className="flex lg:hidden" onClick={toggleMobileMenu}>
            {isMobileMenuOpen ? <CloseIcon /> : <Hamburger />}
          </button>

          <div
            className={cx('lg:flex lg:space-x-xMd ', {
              'absolute w-full left-0 top-nav bg-white flex flex-col items-center justify-center gap-7 pb-12':
                isMobileMenuOpen,
              hidden: !isMobileMenuOpen,
            })}
          >
            <NavLink url="/vystavy">{t('navigation.exhibitionsEvents')}</NavLink>
            <NavLink url="/objavujte">{t('navigation.explore')}</NavLink>
            <NavLink url="/o-galerii">{t('navigation.aboutGallery')}</NavLink>
            <NavLink url="/zapojte-sa">{t('navigation.getInvolved')}</NavLink>
            <NavLink url="/zbierky">{t('navigation.collections')}</NavLink>

            <Button size="small" href="/navstivte">
              {t('navigation.visitUs')}
            </Button>

            <button onClick={toggleSearchBar}>
              <SearchIcon className="w-[calc(36px*var(--icon-size-factor))]" />
            </button>

            <div className="text-gray-500 lg:hidden">
              <AppLangSwitchers contentPage={withAttributes(contentPage) ?? undefined} />
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
