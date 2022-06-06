import { CollectionPageQuery } from '@bratislava/strapi-sdk-city-gallery';
import React from 'react';
import Section from './Section';

interface ImageSectionProps {
  // data: CollectionPageQuery['collectionsPage']['full_screen_image'];
  data: CollectionPageQuery['collectionsPage']; // TODO find correct type and show content
}

const ImageSection: React.FC<ImageSectionProps> = () =>
  // { data }
  {
    return (
      <Section>
        {/* <h2 className="px-12 py-24 text-xxl">{data.section_title}</h2>
      {data.cover?.url ? (
        <div className="max-h-screen p-0 overflow-hidden">
          <Image
            src={data.cover.url}
            alt={data.title}
            width="100%"
            height="100%"
            layout="responsive"
            objectFit="cover"
            unoptimized
          />
        </div>
      ) : null}
      <div className="bg-blue-600">
        <div className="p-12">
          <h1 className="text-xxl">{data.title}</h1>
          <h1 className="font-regular text-xxl">{data.subtitle}</h1>
          <Button size="medium" className="mt-8">
            Detail
          </Button>
        </div>
      </div> */}
      </Section>
    );
  };

export default ImageSection;
