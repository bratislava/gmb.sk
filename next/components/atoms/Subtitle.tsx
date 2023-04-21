import { useTranslation } from 'next-i18next'

import { ContentPageEntityFragment } from '../../graphql'
import { formatDateString } from '../../utils/formatDateString'
import { formatTimeString } from '../../utils/formatTimeString'
import { WithAttributes } from '../../utils/isDefined'

interface ISubtitleProps {
  page: WithAttributes<ContentPageEntityFragment>
}

const Subtitle = ({ page }: ISubtitleProps) => {
  const { i18n } = useTranslation()

  const { subtitle, useDatetimeAsSubtitle, dateFrom, timeFrom } = page.attributes

  return (
    /* strings are valid JSX.Element types but typescript has bug with it, so it needs to be wrapped with fragment */
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <>
      {useDatetimeAsSubtitle ? (
        <>
          {formatDateString(dateFrom, i18n.language, 'short')}
          {timeFrom ? ` / ${formatTimeString(timeFrom, i18n.language)}` : ''}
        </>
      ) : (
        subtitle || null
      )}
    </>
  )
}

export default Subtitle
