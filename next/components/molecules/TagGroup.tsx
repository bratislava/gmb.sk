import { PlaceEntityFragment, TagEntityFragment } from '../../graphql'
import { WithAttributes } from '../../utils/isDefined'
import Tag from '../atoms/Tag'

interface ITagGroupProps {
  tags: WithAttributes<TagEntityFragment>[] | WithAttributes<PlaceEntityFragment>[] | string[]
  activeTags: string[]
  setActiveTags: React.Dispatch<React.SetStateAction<string[]>>
}

const TagGroup = ({ tags, activeTags, setActiveTags }: ITagGroupProps) => {
  const handleTagClick = (tagSlug: string) => {
    if (activeTags.includes(tagSlug)) {
      setActiveTags((prev) => prev.filter((item) => item !== tagSlug))
    } else {
      setActiveTags((prev) => [...prev, tagSlug])
    }
  }

  return (
    <>
      {tags.map((tag) =>
        typeof tag === 'string' ? (
          // Used for years in filters, set to same width
          <Tag
            title={tag}
            key={tag}
            isActive={activeTags.includes(tag)}
            onClick={() => handleTagClick(tag)}
            className="w-[calc(110*var(--size-factor))]"
          />
        ) : (
          <Tag
            title={tag.attributes.title}
            key={tag.attributes.slug}
            isActive={activeTags.includes(tag.attributes.slug)}
            onClick={() => handleTagClick(tag.attributes.slug)}
          />
        )
      )}
    </>
  )
}

export default TagGroup
