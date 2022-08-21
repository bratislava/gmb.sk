/* eslint-disable tailwindcss/no-custom-classname */
import { useTranslation } from 'next-i18next'

import { ContentPageEntityFragment, GeneralEntityFragment, SectionItemEntityFragment } from '../../graphql'
import { getPurchaseId } from '../../utils/getPurchaseId'
import { WithAttributes } from '../../utils/isDefined'
import Link from '../atoms/Link'
import Seo from '../atoms/Seo'
import { SidePanelPlace } from '../atoms/SidePanelPlace'
import { SidePanelTime } from '../atoms/SidePanelTime'
import Footer from '../molecules/Footer'
import CardSection from '../molecules/sections/CardSection'

interface ITicketPageProps {
  contentPage: WithAttributes<ContentPageEntityFragment>
  contactInfo: WithAttributes<GeneralEntityFragment> | null | undefined
  currentEvents?: WithAttributes<SectionItemEntityFragment>[]
}

const TicketPage = ({ contentPage, contactInfo, currentEvents }: ITicketPageProps) => {
  const { t } = useTranslation()

  const { title, subtitle, place, placeTitle, dateFrom, dateTo, timeFrom, timeTo, slug, seo } = contentPage.attributes

  return (
    <>
      <Seo seo={seo} title={title} description={subtitle} />
      <section
        data-goout-id={getPurchaseId(contentPage)}
        className="goout-event-wrapper relative flex min-h-[calc(100vh_-_var(--height-nav))] flex-col"
      >
        <header className="py-yMd px-xMd lg:pr-sidepanel">
          <Link href={`/detail/${slug}`} preserveStyle noUnderline>
            <div className="lg:mr-[5vw]">
              <h1 className="goout-event-title text-xxl">{title}</h1>
              <p className="text-xxl font-regular">{subtitle}</p>
            </div>
          </Link>

          <div className="mt-6 flex w-full flex-wrap justify-start gap-x-xMd gap-y-yMd">
            <SidePanelPlace placeFragment={{ place, placeTitle }} isOneLine />
            <SidePanelTime datetime={{ dateFrom, dateTo, timeFrom, timeTo }} isOneLine />
          </div>
        </header>

        {/* TODO */}
        {/* <aside id="sidebar" className="hidden w-ticketSidebar flex-col bg-gmbDark px-xMd py-yMd text-white lg:flex">
          <p className="text-lg">{ticketIncludesText}</p>
          <div className="grow" />
          <Link href="#relatedContent">{t('common.showIncludedEvents')}</Link>
  </aside> */}

        <div id="goout-form" className="grow bg-gmbLightGray px-xMd py-yLg" />
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
/* eslint-enable tailwindcss/no-custom-classname */
