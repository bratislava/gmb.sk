import cx from 'classnames'
import { useTranslation } from 'next-i18next'
import React from 'react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import Button from '../../atoms/Button'
import styles from './Ticket.module.css'

interface ITicketProps {
  title: string | null | undefined
  price: number | null | undefined
  description: string | null | undefined
  link: string | null | undefined
}

export const Ticket = ({ title, price, description, link }: ITicketProps) => {
  const { t } = useTranslation()
  return (
    <div
      className={cx(
        styles.ticket,
        'flex flex-col mb-yStandard justify-between last:mb-0 lg:mb-0 w-full min-h-[360px] lg:min-h-[500px] 3xl:min-h-[700px] bg-gmbLightGray relative p-8 hover:bg-[#6cc7ed] last-of-type:after:hidden first-of-type:before:hidden'
      )}
    >
      <div className="pb-yStandard">
        <h3 className="text-xl">{title}</h3>
        {price && <p className="text-xl font-regular">{price}€</p>}
      </div>
      <div>
        {description ? (
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            className="relative"
            components={{
              p: ({ children }) => <p className="pb-yStandard text-btn">{children}</p>,
              ul: ({ children }) => <ul className="pl-5 list-disc pb-yStandard text-btn">{children}</ul>,
              ol: ({ children }) => <ol className="pl-5 list-decimal pb-yStandard text-btn">{children}</ol>,
            }}
          >
            {description ?? ''}
          </ReactMarkdown>
        ) : null}
        {link ? (
          <Button href={link} size="small" className="px-xStandard w-fit">
            {t('common.buyForYourself')}
          </Button>
        ) : null}
        {link ? (
          <Button href={link} size="small" className="mt-4 px-xStandard w-fit">
            {t('common.buyAsGift')}
          </Button>
        ) : null}
      </div>
    </div>
  )
}

export default Ticket
