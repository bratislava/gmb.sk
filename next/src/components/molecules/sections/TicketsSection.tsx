import Script from 'next/script'

import CityGalleryMarkdown from '@/src/components/atoms/CityGalleryMarkdown'
import Section from '@/src/components/molecules/sections/Section'
import Ticket from '@/src/components/molecules/Ticket/Ticket'
import { TicketEntityFragment } from '@/src/services/graphql'
import cn from '@/src/utils/cn'

interface TicketsSectionProps {
  tickets: TicketEntityFragment[]
  title?: string
  text?: string
  anchor?: string
}

const TicketsSection = ({ tickets, title, text, anchor }: TicketsSectionProps) => {
  return (
    <Section anchor={anchor} title={title}>
      {/* Load GoOut script to be able to show purchase form */}
      <Script src="https://partners.goout.net/sk-bratislava/gmbsk.js" />

      <div className={cn('px-xMd pb-yMd', { 'py-yMd': !title, 'pb-yMd': title })}>
        <CityGalleryMarkdown content={text} />

        <div className="mt-yMd flex flex-wrap justify-between lg:flex-nowrap lg:justify-items-stretch">
          {tickets?.map((ticket) => (
            <Ticket
              key={ticket.id}
              title={ticket.title}
              price={ticket.price}
              description={ticket.description}
              purchaseIdSelf={ticket.purchaseIdSelf}
              purchaseIdGift={ticket.purchaseIdGift}
            />
          ))}
        </div>
      </div>

      <div id="goout-form" className="scroll-mt-nav bg-gmbLightGray px-xMd py-yLg empty:hidden" />
    </Section>
  )
}

export default TicketsSection
