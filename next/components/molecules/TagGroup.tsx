import {
  PlaceTagFragment,
  TagFragment,
} from '@bratislava/strapi-sdk-city-gallery';
import React from 'react';
import Tag from '../atoms/Tag';

interface ITagGroupProps {
  tags: TagFragment[] | PlaceTagFragment[];
  activeTags: string[];
  setActiveTags: React.Dispatch<React.SetStateAction<string[]>>;
}

const TagGroup = ({ tags, activeTags, setActiveTags }: ITagGroupProps) => {
  /* TODO remove ?? '' after each slug after the slug is required */
  return (
    <>
      {tags.map((tag) => (
        <Tag
          // title={`${tag.title} [${tag.contentPages?.filter(isDefined).length ?? 0}]`}
          title={tag.title}
          slug={tag.slug ?? ''}
          key={tag.slug}
          isActive={activeTags.includes(tag.slug ?? '')}
          onClick={() => {
            activeTags.includes(tag.slug ?? '')
              ? setActiveTags((prev) =>
                  prev.filter((item) => item !== tag.slug)
                )
              : setActiveTags((prev) => [...prev, tag.slug ?? '']);
          }}
        />
      ))}
    </>
  );
};

export default TagGroup;
