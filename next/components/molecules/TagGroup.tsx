import React from 'react';
import { PlaceEntityFragment, TagEntityFragment } from '../../graphql';
import { WithAttributes } from '../../utils/isDefined';
import Tag from '../atoms/Tag';

interface ITagGroupProps {
  tags:
    | WithAttributes<TagEntityFragment>[]
    | WithAttributes<PlaceEntityFragment>[];
  activeTags: string[];
  setActiveTags: React.Dispatch<React.SetStateAction<string[]>>;
}

const TagGroup = ({ tags, activeTags, setActiveTags }: ITagGroupProps) => {
  const {} = tags;

  return (
    <>
      {tags.map((tag) => (
        <Tag
          // title={`${tag.title} [${tag.contentPages?.filter(isDefined).length ?? 0}]`}
          title={tag.attributes.title}
          slug={tag.attributes.slug}
          key={tag.attributes.slug}
          isActive={activeTags.includes(tag.attributes.slug)}
          onClick={() => {
            activeTags.includes(tag.attributes.slug)
              ? setActiveTags((prev) =>
                  prev.filter((item) => item !== tag.attributes.slug)
                )
              : setActiveTags((prev) => [...prev, tag.attributes.slug]);
          }}
        />
      ))}
    </>
  );
};

export default TagGroup;
