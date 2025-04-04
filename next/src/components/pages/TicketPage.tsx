import { useTranslation } from 'next-i18next'

import Link from '@/src/components/atoms/Link'
import SeoHead from '@/src/components/atoms/SeoHead'
import { SidePanelPlace } from '@/src/components/atoms/SidePanelPlace'
import { SidePanelTime } from '@/src/components/atoms/SidePanelTime'
import Subtitle from '@/src/components/atoms/Subtitle'
import CardSection from '@/src/components/molecules/sections/CardSection'
import PageWrapper from '@/src/components/pages/PageWrapper'
import { ContentPageEntityFragment, SectionItemEntityFragment } from '@/src/services/graphql'
import { getPurchaseId } from '@/src/utils/getPurchaseId'
import { WithAttributes } from '@/src/utils/isDefined'

interface ITicketPageProps {
  contentPage: WithAttributes<ContentPageEntityFragment>
  currentEvents?: WithAttributes<SectionItemEntityFragment>[]
}

const TicketPage = ({ contentPage, currentEvents }: ITicketPageProps) => {
  const { t } = useTranslation()

  const {
    title,
    titleToShow,
    subtitle,
    place,
    placeTitle,
    dateFrom,
    dateTo,
    timeFrom,
    timeTo,
    slug,
    seo,
  } = contentPage.attributes

  return (
    /* eslint-disable tailwindcss/no-custom-classname */
    <PageWrapper contentPage={contentPage}>
      <SeoHead seo={seo} title={title} description={subtitle} />
      <section
        data-goout-id={getPurchaseId(contentPage)}
        className="goout-event-wrapper relative flex min-h-[calc(100vh_-_var(--nav-height))] flex-col"
      >
        <header className="px-xMd py-yMd lg:pr-sidepanel">
          <Link href={`/detail/${slug}`} preserveStyle noUnderline>
            <div className="lg:mr-xLg">
              <h1 className="goout-event-title text-xxl md:whitespace-pre-wrap">
                {titleToShow || title}
              </h1>
              <p className="mt-1 text-xxl font-regular lg:mt-2">
                <Subtitle page={contentPage} />
              </p>
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
    </PageWrapper>
    /* eslint-enable tailwindcss/no-custom-classname */
  )
}

export default TicketPage
