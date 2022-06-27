import { useTranslation } from 'next-i18next'
import React from 'react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

import LocationIcon from '../../../assets/icons/location.svg'
import { ContactEntityFragment } from '../../../graphql'
import { WithAttributes } from '../../../utils/isDefined'
import Link from '../../atoms/Link'
import Section from './Section'

interface ContactSectionProps {
  contactInfo: WithAttributes<ContactEntityFragment> | null | undefined
  anchor?: string
}

const ContactSection = ({ contactInfo, anchor }: ContactSectionProps) => {
  const { t } = useTranslation()

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

  if (!contactInfo) {
    return null
  }

  return (
    <Section anchor={anchor} color="dark" className="grid grid-cols-2 gap-9 px-xStandard py-yHigh lg:grid-cols-4">
      <div className="col-span-2 flex h-full flex-col justify-between lg:col-span-1">
        <h4 className="pb-yHigh text-xl">{t('common.openingHours')}</h4>
        {contactInfo.attributes.openingHours && (
          <div className="justify-self-end">
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              components={{
                p: ({ children }) => <p className="text-md">{children}</p>,
                ul: ({ children }) => <ul className="list list-disc pl-5 pb-[55px]">{children}</ul>,
              }}
            >
              {contactInfo.attributes.openingHours ?? ''}
            </ReactMarkdown>
          </div>
        )}
      </div>
      <div className="col-span-1 flex h-full flex-col justify-between">
        <h3 className="pb-yHigh text-xl">{contactInfo.attributes.mirbach?.title}</h3>
        <div className="justify-self-end text-md">
          <LocationIcon stroke="white" height="48" className="mb-2" />
          <p>{contactInfo.attributes.mirbach?.address}</p>
        </div>
      </div>
      <div className="col-span-1 flex h-full flex-col justify-between">
        <h3 className="pb-yHigh text-xl">{contactInfo.attributes.palffy?.title}</h3>
        <div className="justify-self-end text-md">
          <LocationIcon stroke="white" height="48" className="mb-2" />
          <p>{contactInfo.attributes.palffy?.address}</p>
        </div>
      </div>
      <div className="col-span-2 flex h-full flex-col justify-between lg:col-span-1">
        <h3 className="pb-yHigh text-xl">{t('common.follow')}</h3>
        <div className="flex flex-col justify-between justify-self-end">
          {followPlatformData.map((platform, index) => (
            <Link href={platform.href} target="_blank" key={index} className="text-md uppercase" preserveStyle>
              {platform.title}
            </Link>
          ))}
        </div>
      </div>
    </Section>
  )
}

export default ContactSection
