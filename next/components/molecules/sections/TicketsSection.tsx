import cx from 'classnames'

import CityGalleryMarkdown from '@/components/atoms/CityGalleryMarkdown'
import Section from '@/components/molecules/sections/Section'
import Ticket from '@/components/molecules/Ticket/Ticket'
import { TicketEntityFragment } from '@/graphql'
import { WithAttributes } from '@/utils/isDefined'

interface TicketsSectionProps {
  tickets: WithAttributes<TicketEntityFragment>[]
  title?: string
  text?: string
  anchor?: string
}

const TicketsSection = ({ tickets, title, text, anchor }: TicketsSectionProps) => {
  return (
    <Section anchor={anchor} title={title}>
      <div
        className={cx('px-xMd pb-yMd', {
          'py-yMd': !title,
          'pb-yMd': title,
        })}
      >
        <CityGalleryMarkdown content={text} />

        <div className="mt-yMd flex flex-wrap justify-between lg:flex-nowrap lg:justify-items-stretch">
          {tickets?.map((ticket) => (
            <Ticket
              key={ticket.id}
              title={ticket.attributes.title}
              price={ticket.attributes.price}
              description={ticket.attributes.description}
              purchaseIdSelf={ticket.attributes.purchaseIdSelf}
              purchaseIdGift={ticket.attributes.purchaseIdGift}
            />
          ))}
        </div>
      </div>

      <div id="goout-form" className="scroll-mt-nav bg-gmbLightGray px-xMd py-yLg empty:hidden" />
    </Section>
  )
}

export default TicketsSection
