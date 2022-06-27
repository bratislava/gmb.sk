import { useTranslation } from 'next-i18next'

import { ContactEntityFragment, ContentPageEntityFragment, SectionItemEntityFragment } from '../../graphql'
import { WithAttributes } from '../../utils/isDefined'
import { Link } from '../atoms/Link'
import Seo from '../atoms/Seo'
import { SidePanelPlace } from '../atoms/SidePanelPlace'
import { SidePanelTime } from '../atoms/SidePanelTime'
import Footer from '../molecules/Footer'
import CardSection from '../molecules/sections/CardSection'

interface ITicketPageProps {
  contentPage: WithAttributes<ContentPageEntityFragment>
  contactInfo: WithAttributes<ContactEntityFragment> | null | undefined
  currentEvents?: WithAttributes<SectionItemEntityFragment>[]
}

const TicketPage = ({ contentPage, contactInfo, currentEvents }: ITicketPageProps) => {
  const { t } = useTranslation()

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
        data-goout-id="id-here"
        data-goout-place-ticket="eg-palffyho-palac"
        className="goout-event-wrapper relative flex min-h-[calc(100vh_-_var(--height-nav))] flex-col"
      >
        <header className="py-yMd px-xMd">
          <Link href={`/detail/${slug}`} preserveStyle noUnderline>
            <hgroup>
              <h1 className="goout-event text-xxl">{title}</h1>
              <p className="text-xxl font-regular">{subtitle}</p>
            </hgroup>
          </Link>

          <p className="my-yMd text-md">{ticketIncludesText}</p>

          <div className="mt-6 flex w-full flex-wrap justify-start gap-x-xMd gap-y-yMd">
            <SidePanelPlace placeFragment={{ place, placeTitle }} isOneLine />
            <SidePanelTime datetime={{ dateFrom, dateTo, timeFrom, timeTo }} isOneLine />
          </div>
        </header>

        {/* <aside
            id="sidebar"
            className="flex-col hidden text-white w-ticketSidebar lg:flex bg-gmbDark px-xMd py-yMd"
          >
            <p className="text-lg">{ticketIncludesText}</p>
            <div className="grow" />
            <Link href="#relatedContent">{t('common.showIncludedEvents')}</Link>
          </aside> */}

        <div id="goout-form" className="grow bg-gmbLightGray px-xMd py-yMd" />
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
