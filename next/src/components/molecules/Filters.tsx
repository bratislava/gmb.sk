import { useTranslation } from 'next-i18next'

import TagGroup from '@/src/components/molecules/TagGroup'
import { PlaceEntityFragment, TagEntityFragment } from '@/src/services/graphql'
import { WithAttributes } from '@/src/utils/isDefined'

interface FiltersProps {
  tagGroups?: WithAttributes<TagEntityFragment>[][]
  activeTags?: string[]
  setActiveTags?: React.Dispatch<React.SetStateAction<string[]>>
  places?: WithAttributes<PlaceEntityFragment>[]
  activePlaces?: string[]
  setActivePlaces?: React.Dispatch<React.SetStateAction<string[]>>
  years?: string[]
  activeYears?: string[]
  setActiveYears?: React.Dispatch<React.SetStateAction<string[]>>
}

const Filters = ({
  tagGroups,
  places,
  activeTags,
  setActiveTags,
  activePlaces,
  setActivePlaces,
  years,
  setActiveYears,
  activeYears,
}: FiltersProps) => {
  const { t } = useTranslation()

  return (
    <div className="relative flex max-h-full min-h-0 flex-col pt-yMd">
      <div className="flex justify-between pb-yMd lg:hidden">
        <p className="block text-lg">{t('common.filter')}</p>
        {/* TODO reset icon */}
      </div>
      <div className="flex flex-col gap-yMd overflow-auto">
        <div className="flex flex-wrap gap-xSm empty:hidden">
          {tagGroups &&
            activeTags &&
            setActiveTags &&
            tagGroups.map((tagGroup, index) => (
              <TagGroup
                tags={tagGroup}
                activeTags={activeTags}
                setActiveTags={setActiveTags}
                // eslint-disable-next-line react/no-array-index-key
                key={index}
              />
            ))}
        </div>
        <div className="flex flex-wrap gap-xSm empty:hidden">
          {years && activeYears && setActiveYears && (
            <TagGroup tags={years} activeTags={activeYears} setActiveTags={setActiveYears} />
          )}
        </div>
        <div className="flex flex-wrap gap-xSm empty:hidden">
          {places && activePlaces && setActivePlaces && (
            <TagGroup tags={places} activeTags={activePlaces} setActiveTags={setActivePlaces} />
          )}
        </div>
      </div>
    </div>
  )
}

export default Filters
