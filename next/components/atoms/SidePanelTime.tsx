import { useTranslation } from 'next-i18next'

import TimeIcon from '../../assets/icons/time.svg'
import { DatetimeFragment } from '../../graphql'
import { formatDateString } from '../../utils/formatDateString'
import { formatTimeString } from '../../utils/formatTimeString'

export interface SidePanelTimeProps {
  datetime: DatetimeFragment
  isOneLine?: boolean
  noIcon?: boolean
}

export const SidePanelTime = ({ datetime, isOneLine, noIcon }: SidePanelTimeProps) => {
  const { i18n } = useTranslation()

  const { dateFrom, dateTo, timeFrom, timeTo } = datetime

  const locale = i18n.language

  if (!dateFrom && !dateTo && !timeFrom && !timeTo) {
    return null
  }

  if (isOneLine) {
    return (
      <div className="whitespace-nowrap text-nav">
        <time className="flex items-center gap-3">
          {!noIcon && <TimeIcon className="w-[calc(24px*var(--icon-size-factor))]" />}
          <span>
            {dateFrom && formatDateString(dateFrom, locale)}
            {dateTo && ' - '}
            {dateTo && formatDateString(dateTo, locale)}
          </span>
          <span>
            {timeFrom && formatTimeString(timeFrom)}
            {timeTo && ' - '}
            {timeTo && formatTimeString(timeTo)}
          </span>
        </time>
      </div>
    )
  }
  return (
    <div className="whitespace-nowrap text-nav">
      {!noIcon && (
        <div className="mb-3">
          <TimeIcon className="w-[calc(48px*var(--icon-size-factor))]" />
        </div>
      )}
      <time className="flex flex-col">
        {dateFrom && (
          <span>
            {formatDateString(dateFrom, locale)}
            {dateTo && ' -'}
          </span>
        )}
        {dateTo && <span>{formatDateString(dateTo, locale)}</span>}
        <div>
          {timeFrom && <span>{formatTimeString(timeFrom)}</span>}
          {timeTo && ' - '}
          {timeTo && <span>{formatTimeString(timeTo)}</span>}
        </div>
      </time>
    </div>
  )
}
