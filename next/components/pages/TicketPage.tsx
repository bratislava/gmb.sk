import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import { useTranslation } from 'next-i18next'
import React from 'react'
import Footer from '../../components/molecules/Footer'
import { ContactEntityFragment, ContentPageEntityFragment, SectionItemEntityFragment } from '../../graphql'
import { WithAttributes } from '../../utils/isDefined'
import { Link } from '../atoms/Link'
import Seo from '../atoms/Seo'
import { SidePanelPlace } from '../atoms/SidePanelPlace'
import { SidePanelTime } from '../atoms/SidePanelTime'
import CardSection from '../molecules/sections/CardSection'

interface ITicketPageProps {
  contentPage: WithAttributes<ContentPageEntityFragment>
  contactInfo: WithAttributes<ContactEntityFragment> | null | undefined
  currentEvents?: WithAttributes<SectionItemEntityFragment>[]
}

const TicketPage = ({ contentPage, contactInfo, currentEvents }: ITicketPageProps) => {
  const { t } = useTranslation()

  gsap.registerPlugin(ScrollTrigger)
  React.useEffect(() => {
    gsap.to('#sidebar', {
      bottom: '100vh',
      ease: 'none',
      scrollTrigger: {
        trigger: '#paralaxAnchor',
        start: 'top bottom',
        end: 'top top',
        scrub: 0,
      },
    })
  }, [])

  const { title, subtitle, place, placeTitle, dateFrom, dateTo, timeFrom, timeTo, slug, seo } = contentPage.attributes

  const ticketIncludesText = `${t('common.ticketIncludesPalace')} ${
    place?.data?.attributes?.title === t('common.places.palffysPalace')
      ? t('common.places.palffysPalaceLocative')
      : t('common.places.mirbachsPalaceLocative')
  }`

  return (
    <>
      {seo && <Seo seo={seo} />}
      <section
        data-goOutId="event-id-here"
        className="goOutEventWrapper relative flex flex-col min-h-[calc(100vh_-_var(--height-nav))]"
      >
        <header className="py-yStandard px-xStandard">
          <Link href={`/detail/${slug}`} preserveStyle noUnderline>
            <hgroup>
              <h1 className="text-xxl">{title}</h1>
              <p className="font-regular text-xxl">{subtitle}</p>
            </hgroup>
          </Link>

          <p className="my-yStandard text-md">{ticketIncludesText}</p>

          <div className="flex flex-wrap justify-start w-full mt-6 gap-x-xStandard gap-y-yStandard">
            <SidePanelPlace placeFragment={{ place, placeTitle }} isOneLine={true} />
            <SidePanelTime datetime={{ dateFrom, dateTo, timeFrom, timeTo }} isOneLine={true} />
          </div>
        </header>

        {/* <aside
            id="sidebar"
            className="flex-col hidden text-white w-ticketSidebar lg:flex bg-gmbDark px-xStandard py-yStandard"
          >
            <p className="text-lg">{ticketIncludesText}</p>
            <div className="grow" />
            <Link href="#relatedContent">{t('common.showIncludedEvents')}</Link>
          </aside> */}

        <div id="goOutForm" className="grow px-xStandard py-yStandard bg-gmbLightGray" />
      </section>

      <CardSection
        anchor="relatedContent"
        title={t('common.ticketValidAlsoFor')}
        sectionItems={currentEvents}
        noItemsMessage={t('common.noCurrentEvents', {
          place: place?.data?.attributes?.title,
        })}
      />

      {contactInfo && <Footer contactInfo={contactInfo} />}
    </>
  )
}

export default TicketPage
