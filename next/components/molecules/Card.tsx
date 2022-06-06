import { useTranslation } from 'next-i18next';
import Image from 'next/image';
import { useRouter } from 'next/router';
import React from 'react';
import { SectionItemEntityFragment } from '../../graphql';
import { hasAttributes, WithAttributes } from '../../utils/isDefined';
import { isToday } from '../../utils/isToday';
import Button from '../atoms/Button';
import Link from '../atoms/Link';

interface CardProps {
  sectionItem: WithAttributes<SectionItemEntityFragment>;
  showTags?: boolean;
}

export const Card = ({ sectionItem, showTags }: CardProps) => {
  const { t } = useTranslation();
  const router = useRouter();

  const { slug, coverMedia, title, subtitle, tags, perex, dateFrom, dateTo } =
    sectionItem.attributes;

  return (
    <Link href={`/detail/${slug}`} preserveStyle noUnderline>
      <article className="flex flex-col min-h-full space-y-yStandard group">
        <div className="overflow-hidden bg-gmbLightGray">
          {coverMedia?.data?.attributes ? (
            <Image
              src={coverMedia.data.attributes.url}
              alt={coverMedia.data.attributes.alternativeText ?? undefined}
              height="458px"
              width="580px"
              objectFit="cover"
              layout="responsive"
              unoptimized
            />
          ) : null}
        </div>

        {showTags && tags ? (
          <div className="flex flex-wrap gap-6">
            {isToday({
              dateFrom: dateFrom as string,
              dateTo: dateTo as string,
            }) && (
              <span className="pr-3 text-red-600 uppercase text-nav">
                {t('common.today')}!
              </span>
            )}
            {tags?.data.filter(hasAttributes).map((tag) => (
              <Link
                href={`${router.pathname}/?tags=${tag.attributes.slug}`}
                key={tag.attributes.slug}
              >
                {tag.attributes.title}
              </Link>
            ))}
          </div>
        ) : null}

        <hgroup>
          <h3 className="text-xl">{title}</h3>
          <p className="text-xl font-regular">{subtitle}</p>
        </hgroup>

        {perex && <div className="text-md">{perex?.substring(0, 200)}…</div>}

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
