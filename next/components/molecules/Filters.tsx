import { useTranslation } from 'next-i18next'

import { PlaceEntityFragment, TagEntityFragment } from '../../graphql'
import { WithAttributes } from '../../utils/isDefined'
import TagGroup from './TagGroup'

interface FiltersProps {
  tagGroups: WithAttributes<TagEntityFragment>[][]
  places?: WithAttributes<PlaceEntityFragment>[]
  activeTags: string[]
  setActiveTags: React.Dispatch<React.SetStateAction<string[]>>
  activePlaces?: string[]
  setActivePlaces?: React.Dispatch<React.SetStateAction<string[]>>
}

const Filters = ({ tagGroups, places, activeTags, setActiveTags, activePlaces, setActivePlaces }: FiltersProps) => {
  const { t } = useTranslation()

  return (
    <div className="relative flex max-h-full min-h-0 flex-col pt-yMd">
      <div className="flex justify-between pb-yMd lg:hidden">
        <p className="block text-lg">{t('common.filter')}</p>
        {/* TODO reset icon */}
      </div>
      <div className="overflow-auto">
        <div className="flex flex-wrap gap-xSm">
          {tagGroups.map((tagGroup, index) => (
            <TagGroup tags={tagGroup} activeTags={activeTags} setActiveTags={setActiveTags} key={index} />
          ))}
        </div>
        <div className="flex flex-wrap gap-xSm pt-yMd">
          {places && activePlaces && setActivePlaces && (
            <TagGroup tags={places} activeTags={activePlaces} setActiveTags={setActivePlaces} />
          )}
        </div>
      </div>
    </div>
  )
}

export default Filters
