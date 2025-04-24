import { useTranslation } from 'next-i18next'

import SeoHead from '@/src/components/atoms/SeoHead'
import HighlightsSection from '@/src/components/molecules/sections/HighlightsSection'
import NewsletterSection from '@/src/components/molecules/sections/NewsletterSection'
import NewsSection from '@/src/components/molecules/sections/NewsSection'
import OpeningHoursSection from '@/src/components/molecules/sections/OpeningHoursSection'
import PageSectionContainer from '@/src/components/molecules/sections/PageSectionContainer'
import PartnersSection from '@/src/components/molecules/sections/PartnersSection'
import RichtextSection from '@/src/components/molecules/sections/RichtextSection'
import Submenu from '@/src/components/molecules/Submenu'
import PageWrapper from '@/src/components/pages/PageWrapper'
import { HomePageQuery, NewsItemEntityFragment } from '@/src/services/graphql'
import { getAnchor } from '@/src/utils/getAnchor'
import { hasAttributes, isDefined, WithAttributes } from '@/src/utils/isDefined'

interface HomePageProps {
  page: HomePageQuery['homePage']
  title: string
  newsItems?: WithAttributes<NewsItemEntityFragment>[] | null
}

const HomePage = ({ page: pageResponse, title, newsItems }: HomePageProps) => {
  const { t } = useTranslation()

  const page = pageResponse?.data?.attributes

  const submenu: string[] = []

  page?.sections
    ?.filter(isDefined)
    .filter(isDefined)
    .forEach((section) => {
      if ('submenuTitle' in section && section.submenuTitle) {
        submenu.push(section.submenuTitle)
      }
    })

  return (
    <PageWrapper>
      <SeoHead title={title} seo={page?.seo} />

      <HighlightsSection
        highlights={page?.highlights
          ?.map((highlight) => highlight?.contentPage?.data)
          .filter(hasAttributes)}
      />

      {page?.sections ? <Submenu items={submenu} /> : null}

      {page?.sections
        ?.filter(isDefined)
        .filter(isDefined)
        .map((section) => {
          if (section.__typename === 'ComponentSectionsNewsSection' && newsItems) {
            return (
              <NewsSection
                items={newsItems}
                title={section.title ?? undefined}
                anchor={getAnchor(section.submenuTitle)}
                key={`${section.__typename}-${section.id}`}
              />
            )
          }

          if (section.__typename === 'ComponentSectionsOpeningHoursSection') {
            return (
              <OpeningHoursSection
                anchor={getAnchor(section.submenuTitle)}
                key={`${section.__typename}-${section.id}`}
              />
            )
          }

          if (section.__typename === 'ComponentSectionsNewsletterSection') {
            return (
              <NewsletterSection
                anchor={getAnchor(section.submenuTitle)}
                title={section.title ?? undefined}
                subTitle={section.subTitle ?? undefined}
                text={section.text ?? undefined}
                key={`${section.__typename}-${section.id}`}
              />
            )
          }

          if (
            section.__typename === 'ComponentSectionsPartnersSection' &&
            section?.partners?.length
          ) {
            return (
              <PartnersSection
                title={section.title ?? t('common.partners')}
                anchor={getAnchor(section.submenuTitle)}
                partners={section.partners.map((item) => item?.partner?.data).filter(hasAttributes)}
                key={`${section.__typename}-${section.id}`}
              />
            )
          }

          if (section.__typename === 'ComponentSectionsRichtextSection') {
            return (
              <RichtextSection
                content={section.content}
                anchor={getAnchor(section.submenuTitle)}
                className="px-xMd py-yMd"
                key={`${section.__typename}-${section.id}`}
              />
            )
          }

          if (section.__typename === 'ComponentSectionsPageSection') {
            return (
              <PageSectionContainer
                section={section}
                anchor={getAnchor(section.submenuTitle)}
                key={`${section.__typename}-${section.id}`}
              />
            )
          }

          return null
        })}
    </PageWrapper>
  )
}

export default HomePage
