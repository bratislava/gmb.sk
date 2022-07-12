import cx from 'classnames'
import { useTranslation } from 'next-i18next'

import { TicketEntityFragment } from '../../../graphql'
import { WithAttributes } from '../../../utils/isDefined'
import CityGalleryMarkdown from '../../atoms/CityGalleryMarkdown'
import Ticket from '../Ticket/Ticket'
import Section from './Section'

interface TicketsSectionProps {
  tickets: WithAttributes<TicketEntityFragment>[]
  title?: string
  text?: string
  anchor?: string
}

const TicketsSection = ({ tickets, title, text, anchor }: TicketsSectionProps) => {
  const { t } = useTranslation()

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

      <div id="goout-form" className="scroll-mt-nav bg-gmbLightGray px-xMd py-yMd empty:hidden" />
    </Section>
  )
}

export default TicketsSection
