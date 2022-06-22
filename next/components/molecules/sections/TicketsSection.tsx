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
        className={cx('px-xStandard pb-yStandard', {
          'py-yStandard': !title,
          'pb-yStandard': title,
        })}
      >
        <CityGalleryMarkdown content={text} />

        <div className="lg:justify-stretch mt-yStandard flex flex-wrap justify-between lg:flex-nowrap">
          {tickets?.map((ticket) => (
            <Ticket
              key={ticket.id}
              id={ticket.id}
              title={ticket.attributes.title}
              price={ticket.attributes.price}
              description={ticket.attributes.description}
              link={ticket.attributes.link}
            />
          ))}
        </div>
      </div>

      <div id="goOutForm" className="scroll-mt-nav bg-gmbLightGray px-xStandard py-yStandard empty:hidden" />
    </Section>
  )
}

export default TicketsSection
