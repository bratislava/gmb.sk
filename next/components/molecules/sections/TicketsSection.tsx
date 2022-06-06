import cx from 'classnames';
import React from 'react';
import { Ticket as TicketProps } from '../../../types/ticket';
import CityGalleryMarkdown from '../../atoms/CityGalleryMarkdown';
import Ticket from '../Ticket/Ticket';
import Section from './Section';

interface TicketsSectionProps {
  tickets: TicketProps[];
  title?: string;
  text?: string;
  anchor?: string;
}

const TicketsSection = ({
  tickets,
  title,
  text,
  anchor,
}: TicketsSectionProps) => {
  return (
    <Section anchor={anchor} title={title}>
      <div
        className={cx('px-xStandard pb-yStandard', {
          'py-yStandard': !title,
          'pb-yStandard': title,
        })}
      >
        <CityGalleryMarkdown content={text} />

        <div className="flex flex-wrap justify-between mt-24 lg:justify-stretch lg:flex-nowrap">
          {tickets?.map((ticket) => (
            <Ticket
              key={ticket.price}
              title={ticket.title}
              price={ticket.price}
              description={ticket.description}
              link={ticket.link}
            />
          ))}
        </div>
      </div>
    </Section>
  );
};

export default TicketsSection;
