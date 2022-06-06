import { ContactAndFooterFragment } from '@bratislava/strapi-sdk-city-gallery';
import { useTranslation } from 'next-i18next';
import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { ReactComponent as LocationIcon } from '../../../assets/icons/location.svg';
import Link from '../../atoms/Link';
import Section from './Section';

interface ContactSectionProps {
  contactInfo: ContactAndFooterFragment;
  anchor?: string;
}

const ContactSection = ({ contactInfo, anchor }: ContactSectionProps) => {
  const { t } = useTranslation();

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
  ];

  return (
    <Section
      anchor={anchor}
      color="dark"
      className="grid grid-cols-2 px-xStandard lg:grid-cols-4 gap-9 py-yHigh"
    >
      <div className="flex flex-col justify-between h-full col-span-2 lg:col-span-1">
        <h4 className="text-xl pb-yHigh">{t('common.openingHours')}</h4>
        {contactInfo?.openingHours && (
          <div className="justify-self-end">
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              components={{
                p: ({ children }) => <p className="text-md">{children}</p>,
                ul: ({ children }) => (
                  <ul className="list-disc list pl-5 pb-[55px]">{children}</ul>
                ),
              }}
            >
              {contactInfo?.openingHours ?? ''}
            </ReactMarkdown>
          </div>
        )}
      </div>
      <div className="flex flex-col justify-between h-full col-span-1">
        <h3 className="text-xl pb-yHigh">{contactInfo?.mirbach?.title}</h3>
        <div className="text-md justify-self-end">
          <LocationIcon stroke="white" height="48" className="mb-2" />
          <p>{contactInfo?.mirbach?.address}</p>
        </div>
      </div>
      <div className="flex flex-col justify-between h-full col-span-1">
        <h3 className="text-xl pb-yHigh">{contactInfo?.palffy?.title}</h3>
        <div className="text-md justify-self-end">
          <LocationIcon stroke="white" height="48" className="mb-2" />
          <p>{contactInfo.palffy?.address}</p>
        </div>
      </div>
      <div className="flex flex-col justify-between h-full col-span-2 lg:col-span-1">
        <h3 className="text-xl pb-yHigh">{t('common.follow')}</h3>
        <div className="flex flex-col justify-between justify-self-end">
          {followPlatformData.map((platform, index) => (
            <Link
              href={platform.href}
              target="_blank"
              key={index}
              className="uppercase text-md"
              preserveStyle
            >
              {platform.title}
            </Link>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default ContactSection;
