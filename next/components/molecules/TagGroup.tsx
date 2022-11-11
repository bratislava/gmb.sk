import { PlaceEntityFragment, TagEntityFragment } from '../../graphql'
import { WithAttributes } from '../../utils/isDefined'
import Tag from '../atoms/Tag'

interface ITagGroupProps {
  tags: WithAttributes<TagEntityFragment>[] | WithAttributes<PlaceEntityFragment>[]
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
      {tags.map((tag) => (
        <Tag
          // title={`${tag.title} [${tag.contentPages?.filter(isDefined).length ?? 0}]`}
          title={tag.attributes.title}
          key={tag.attributes.slug}
          isActive={activeTags.includes(tag.attributes.slug)}
          onClick={() => handleTagClick(tag.attributes.slug)}
        />
      ))}
    </>
  )
}

export default TagGroup
