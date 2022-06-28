import { useTranslation } from 'next-i18next'
import React from 'react'

import { PlaceEntityFragment, TagEntityFragment } from '../../graphql'
import { WithAttributes } from '../../utils/isDefined'
import Button from '../atoms/Button'
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
    <div className="relative pt-6 lg:pt-12">
      <div className="flex justify-between pb-yMd lg:hidden">
        <p className="block text-lg">{t('common.filter')}</p>
        {/* TODO reset icon */}
      </div>
      <div className="flex flex-wrap gap-6">
        {tagGroups.map((tagGroup, index) => (
          <TagGroup tags={tagGroup} activeTags={activeTags} setActiveTags={setActiveTags} key={index} />
        ))}
      </div>
      <div className="flex flex-wrap gap-6 pt-6">
        {places && activePlaces && setActivePlaces && (
          <TagGroup tags={places} activeTags={activePlaces} setActiveTags={setActivePlaces} />
        )}
      </div>
      <div className="mt-11 flex justify-center lg:hidden">
        <Button>{t('common.showResults')}</Button>
      </div>
    </div>
  )
}

export default Filters
