import { useTranslation } from 'next-i18next'

import TimeIcon from '@/src/assets/icons/time.svg'
import { DatetimeFragment } from '@/src/services/graphql'
import { formatDateString } from '@/src/utils/formatDateString'
import { formatTimeString } from '@/src/utils/formatTimeString'

export interface SidePanelTimeProps {
  datetime: DatetimeFragment
  isOneLine?: boolean
  noIcon?: boolean
}

// eslint-disable-next-line sonarjs/cognitive-complexity
export const SidePanelTime = ({ datetime, isOneLine, noIcon }: SidePanelTimeProps) => {
  const { i18n } = useTranslation()
  const locale = i18n.language

  const { dateFrom, dateTo, timeFrom, timeTo } = datetime

  if (!dateFrom && !dateTo && !timeFrom && !timeTo) {
    return null
  }

  if (isOneLine) {
    return (
      <div className="whitespace-nowrap text-nav">
        <div className="flex items-center gap-3">
          {!noIcon && <TimeIcon className="dh-[24]" />}
          <span>
            {dateFrom && formatDateString(dateFrom, locale)}
            {dateTo && dateTo !== dateFrom && ` - ${formatDateString(dateTo, locale)}`}
          </span>
          <span>
            {timeFrom && formatTimeString(timeFrom, locale)}
            {timeTo && ' - '}
            {timeTo && formatTimeString(timeTo, locale)}
          </span>
        </div>
      </div>
    )
  }

  return (
    <div className="whitespace-nowrap text-nav">
      {!noIcon && (
        <div className="mb-3">
          <TimeIcon className="dh-[48]" />
        </div>
      )}
      <div className="flex flex-col">
        {dateFrom && (
          <span>
            {formatDateString(dateFrom, locale)}
            {dateTo && dateTo !== dateFrom && ' -'}
          </span>
        )}
        {dateTo && dateTo !== dateFrom && <span>{formatDateString(dateTo, locale)}</span>}
        <div>
          {timeFrom && <span>{formatTimeString(timeFrom, locale)}</span>}
          {timeTo && ' - '}
          {timeTo && <span>{formatTimeString(timeTo, locale)}</span>}
        </div>
      </div>
    </div>
  )
}
