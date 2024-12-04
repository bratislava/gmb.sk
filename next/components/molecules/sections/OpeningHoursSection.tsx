import { useTranslation } from 'next-i18next'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

import LocationIcon from '@/assets/icons/location.svg'
import Link from '@/components/atoms/Link'
import Section from '@/components/molecules/sections/Section'
import { useGeneralContext } from '@/utils/generalContext'

interface OpeningHoursSectionProps {
  anchor?: string
}

const OpeningHoursSection = ({ anchor }: OpeningHoursSectionProps) => {
  const { t } = useTranslation()
  const { general } = useGeneralContext()

  const followPlatformData = [
    {
      href: 'https://www.facebook.com/Galeria.Mesta.Bratislavy',
      title: 'Facebook',
    },
    {
      href: 'https://www.youtube.com/channel/UCvZyYXYRuzHXsZC63pZXWuQ',
      title: 'YouTube',
    },
    {
      href: 'https://www.instagram.com/galeria_mesta_bratislavy',
      title: 'Instagram',
    },
    {
      href: 'https://soundcloud.com/user-620213737',
      title: 'SoundCloud',
    },
  ]

  if (!general?.data?.attributes) {
    return null
  }

  const { openingHours, mirbach, palffy } = general.data.attributes

  return (
    <Section
      anchor={anchor}
      color="dark"
      className="grid grid-cols-2 gap-9 px-xMd py-yLg lg:grid-cols-4"
    >
      <div className="col-span-2 flex h-full flex-col justify-between lg:col-span-1">
        <h4 className="pb-yLg text-xl">{t('common.openingHours')}</h4>
        {openingHours && (
          <div className="justify-self-end">
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              components={{
                p: ({ children }) => <p className="text-md">{children}</p>,
                ul: ({ children }) => <ul className="list-disc pb-[55px] pl-5">{children}</ul>,
              }}
            >
              {openingHours ?? ''}
            </ReactMarkdown>
          </div>
        )}
      </div>
      <div className="col-span-1 flex h-full flex-col justify-between">
        <h3 className="pb-yLg text-xl">{mirbach?.title}</h3>
        <div className="justify-self-end text-md">
          <LocationIcon className="mb-2 dw-[48]" />
          <p>{mirbach?.address}</p>
        </div>
      </div>
      <div className="col-span-1 flex h-full flex-col justify-between">
        <h3 className="pb-yLg text-xl">{palffy?.title}</h3>
        <div className="justify-self-end text-md">
          <LocationIcon className="mb-2 dw-[48]" />
          <p>{palffy?.address}</p>
        </div>
      </div>
      <div className="col-span-2 flex h-full flex-col justify-between lg:col-span-1">
        <h3 className="pb-yLg text-xl">{t('common.follow')}</h3>
        <div className="flex flex-col justify-between justify-self-end">
          {followPlatformData.map((platform, index) => (
            <Link
              href={platform.href}
              target="_blank"
              // eslint-disable-next-line react/no-array-index-key
              key={index}
              className="text-md uppercase"
              preserveStyle
            >
              {platform.title}
            </Link>
          ))}
        </div>
      </div>
    </Section>
  )
}

export default OpeningHoursSection
