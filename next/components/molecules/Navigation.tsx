import cx from 'classnames'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { useTranslation } from 'next-i18next'
import { useEffect, useState } from 'react'

import CloseIcon from '../../assets/icons/close-x.svg'
import HamburgerIcon from '../../assets/icons/menu.svg'
import SearchIcon from '../../assets/icons/search.svg'
import Logo from '../../assets/images/gmb-logo-header.png'
import { ContentPageEntityFragment } from '../../graphql'
import { withAttributes } from '../../utils/isDefined'
import AppLangSwitchers from '../atoms/AppLangSwitchers'
import Button from '../atoms/Button'
import Link from '../atoms/Link'
import SkipNavigation from '../atoms/SkipNavigation'
import SearchBar from './SearchBar'

interface NavigationProps {
  contentPage?: ContentPageEntityFragment
}

const Navigation = ({ contentPage }: NavigationProps) => {
  const { t, i18n } = useTranslation()
  const router = useRouter()

  const [isSearchBarOpen, setIsSearchBarOpen] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  gsap.registerPlugin(ScrollTrigger)
  useEffect(() => {
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

        <div className="mx-xMd flex w-full items-center justify-between">
          <Link href="/" preserveStyle noUnderline className="group min-w-fit">
            <div className="flex">
              <div className="h-logoHeight w-logoWidth">
                <Image src={Logo} alt="Logo GMB" objectFit="scale-down" unoptimized />
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

          <button type="button" className="-mr-5 flex p-5 lg:hidden" onClick={toggleMobileMenu} aria-label="Menu">
            {isMobileMenuOpen ? (
              <CloseIcon className="dw-[30] dh-[30]" />
            ) : (
              <HamburgerIcon className="ml-[-5] dw-[30] dh-[30]" width={20} height={20} />
            )}
          </button>

          <div
            className={cx('lg:flex lg:gap-x-xMd', {
              'absolute left-0 top-nav flex w-full flex-col items-center justify-center gap-7 bg-white pb-12':
                isMobileMenuOpen,
              hidden: !isMobileMenuOpen,
            })}
          >
            <Link href="/vystavy">{t('navigation.exhibitionsEvents')}</Link>
            <Link href="/objavujte">{t('navigation.explore')}</Link>
            <Link href="/o-galerii">{t('navigation.aboutGallery')}</Link>
            <Link href="/zapojte-sa">{t('navigation.getInvolved')}</Link>
            <Link href="/zbierky">{t('navigation.collections')}</Link>

            <Button size="small" href="/navstivte">
              {t('navigation.visitUs')}
            </Button>

            <button type="button" className="-ml-4 px-2" onClick={toggleSearchBar} aria-label={t('common.search')}>
              <SearchIcon className="dw-[36]" />
            </button>

            {/* TODO show switchers when EN content is ready */}
            {/* <div className="text-gray-500 lg:hidden">
              <AppLangSwitchers contentPage={withAttributes(contentPage) ?? undefined} />
            </div> */}
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
