import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { useTranslation } from 'next-i18next';
import React from 'react';
import Footer from '../../components/molecules/Footer';
import {
  ContactEntityFragment,
  ContentPageEntityFragment,
  SectionItemEntityFragment,
} from '../../graphql';
import { WithAttributes } from '../../utils/isDefined';
import { Link } from '../atoms/Link';
import { SidePanelPlace } from '../atoms/SidePanelPlace';
import { SidePanelTime } from '../atoms/SidePanelTime';
import CardSection from '../molecules/sections/CardSection';

interface ITicketPageProps {
  contentPage: WithAttributes<ContentPageEntityFragment>;
  contactInfo?: WithAttributes<ContactEntityFragment> | null;
  currentEvents?: WithAttributes<SectionItemEntityFragment>[];
}

const TicketPage = ({
  contentPage,
  contactInfo,
  currentEvents,
}: ITicketPageProps) => {
  const { t } = useTranslation();

  gsap.registerPlugin(ScrollTrigger);
  React.useEffect(() => {
    gsap.to('#sidebar', {
      bottom: '100vh',
      ease: 'none',
      scrollTrigger: {
        trigger: '#paralaxAnchor',
        start: 'top bottom',
        end: 'top top',
        scrub: 0,
      },
    });
  }, []);

  const {
    title,
    subtitle,
    place,
    placeTitle,
    dateFrom,
    dateTo,
    timeFrom,
    timeTo,
    slug,
  } = contentPage.attributes;

  const ticketIncludesText = t('common.ticketIncludesPalace', {
    place: place?.data?.attributes?.title,
  });

  return (
    <div className="relative">
      <aside
        id="sidebar"
        className="bg-gmbDark p-9 text-white max-w-[400px] fixed right-0 h-[calc(100vh-var(--height-nav))] hidden lg:block"
      >
        <p className="text-xl mt-9">{ticketIncludesText}</p>
        <Link href="#relatedContent" className="absolute bottom-14">
          {t('common.showIncludedEvents')}
        </Link>
      </aside>
      {/* TODO change 400px to const */}
      <div className="w-full lg:w-[calc(100%-400px)]">
        <div className="py-yStandard px-xStandard">
          <Link href={`/detail/${slug}`} preserveStyle>
            <hgroup>
              <h1 className="text-xxl">{title}</h1>
              <p className="font-regular text-xxl">{subtitle}</p>
            </hgroup>
          </Link>

          <p className="my-10 lg:hidden">{ticketIncludesText}</p>
          <div className="flex flex-wrap justify-start w-full mt-6 gap-x-xStandard gap-y-yStandard">
            <SidePanelPlace
              placeFragment={{ place, placeTitle }}
              isOneLine={true}
            />
            <SidePanelTime
              datetime={{ dateFrom, dateTo, timeFrom, timeTo }}
              isOneLine={true}
            />
          </div>
        </div>
        <div className="px-xStandard py-yStandard h-[800px] bg-gmbLightGray">
          <h2 className="text-xxl">{t('common.buyTicketsGoOut')}</h2>
        </div>
      </div>

      <div id="paralaxAnchor">
        <CardSection
          anchor="relatedContent"
          title={t('common.ticketValidAlsoFor')}
          sectionItems={currentEvents}
          noItemsMessage={t('common.noCurrentEvents', {
            place: place?.data?.attributes?.title,
          })}
        />
      </div>

      {contactInfo && <Footer contactInfo={contactInfo} />}
    </div>
  );
};

export default TicketPage;
