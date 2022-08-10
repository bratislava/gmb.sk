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
        <div className="flex items-center gap-3">
          {!noIcon && <TimeIcon className="dh-[24px]" />}
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
        </div>
      </div>
    )
  }
  return (
    <div className="whitespace-nowrap text-nav">
      {!noIcon && (
        <div className="mb-3">
          <TimeIcon className="dh-[48px]" />
        </div>
      )}
      <div className="flex flex-col">
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
      </div>
    </div>
  )
}
