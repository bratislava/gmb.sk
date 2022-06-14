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
    if (isSearchBarOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }
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
      <nav className="fixed top-0 left-0 right-0 z-50 flex w-full bg-white h-nav drop-shadow-md">
        <div className="flex items-center justify-between w-full mx-6 lg:mx-9 3xl:mx-12">
          <Link href="/" preserveStyle noUnderline className="min-w-fit group">
            <div className="flex">
              <div className="h-logoHeight w-logoWidth">
                <Image src={Logo} alt="Logo GMB" objectFit="scale-down" unoptimized />
              </div>

              <span
                id={'navLogoText'}
                className="absolute ml-4 text-sm leading-4 pl-logoWidth whitespace-nowrap group-hover:underline"
              >
                {i18n.language === 'sk' ? t('common.cityGallery') : t('common.bratislavaGenitiv')}
                <br />
                {i18n.language === 'sk' ? t('common.bratislavaGenitiv') : t('common.cityGallery')}
              </span>
            </div>
          </Link>

          <button className="flex xl:hidden" onClick={toggleMobileMenu}>
            {isMobileMenuOpen ? <CloseIcon /> : <Hamburger />}
          </button>

          <div
            className={cx('xl:flex xl:space-x-8 ', {
              'absolute w-full left-0 top-nav bg-white flex flex-col items-center justify-center gap-7 pb-12':
                isMobileMenuOpen,
              hidden: !isMobileMenuOpen,
            })}
          >
            <NavLink url="/vystavy">{t('navigation.exhibitionsEvents')}</NavLink>
            <NavLink url="/objavujte">{t('navigation.explore')}</NavLink>
            <NavLink url="/o-galerii">{t('navigation.aboutGallery')}</NavLink>
            <NavLink url="/zapoj-sa">{t('navigation.getInvolved')}</NavLink>
            <NavLink url="/zbierky">{t('navigation.collections')}</NavLink>

            <Button size="small" href="/navstivte">
              {t('navigation.visitUs')}
            </Button>

            <button className="xl:ml-5" onClick={toggleSearchBar}>
              <SearchIcon />
            </button>

            <div className="text-gray-500 xl:hidden">
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
