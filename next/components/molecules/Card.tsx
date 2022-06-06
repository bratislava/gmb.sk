import { SectionItemFragment } from '@bratislava/strapi-sdk-city-gallery';
import { useTranslation } from 'next-i18next';
import Image from 'next/image';
import { useRouter } from 'next/router';
import React from 'react';
import { isDefined } from '../../utils/isDefined';
import { isToday } from '../../utils/isToday';
import Button from '../atoms/Button';
import Link from '../atoms/Link';

interface CardProps {
  sectionItem: SectionItemFragment;
  showTags?: boolean;
}

export const Card = ({ sectionItem, showTags }: CardProps) => {
  const { t } = useTranslation();
  const router = useRouter();

  return (
    <Link href={`/detail/${sectionItem.slug}`} preserveStyle noUnderline>
      <article className="flex flex-col min-h-full space-y-yStandard group">
        <div className="overflow-hidden bg-gmbLightGray">
          {sectionItem.coverMedia ? (
            <Image
              src={sectionItem.coverMedia.url}
              alt={sectionItem.coverMedia.alternativeText ?? undefined}
              height="458px"
              width="580px"
              objectFit="cover"
              layout="responsive"
              unoptimized
            />
          ) : null}
        </div>

        {showTags && sectionItem.tags ? (
          <div className="flex flex-wrap gap-6">
            {isToday({
              dateFrom: sectionItem.dateFrom as string,
              dateTo: sectionItem.dateTo as string,
            }) && (
              <span className="pr-3 text-red-600 uppercase text-nav">
                {t('common.today')}!
              </span>
            )}
            {sectionItem.tags?.filter(isDefined).map((tag) => (
              <Link
                href={`${router.pathname}/?tags=${tag.slug}`}
                key={tag.slug}
              >
                {tag.title}
              </Link>
            ))}
          </div>
        ) : null}

        <hgroup>
          <h3 className="text-xl">{sectionItem.title}</h3>
          <p className="text-xl font-regular">{sectionItem.subtitle}</p>
        </hgroup>

        {sectionItem.perex && (
          <div className="text-md">{sectionItem.perex?.substring(0, 200)}…</div>
        )}

        {/* empty div to push button to the bottom of the card */}
        <div className="flex-grow hidden p-0 m-0 lg:block" />

        <Button
          // href={`/detail/${data.slug}`}
          className="py-2 max-w-fit group-hover:text-white group-hover:bg-gmbDark"
        >
          {t('common.detail')}
        </Button>
      </article>{' '}
    </Link>
  );
};

export default Card;
