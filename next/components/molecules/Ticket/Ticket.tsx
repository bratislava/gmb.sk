import cx from 'classnames'
import { useRouter } from 'next/router'
import { useTranslation } from 'next-i18next'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

import Button from '../../atoms/Button'
import styles from './Ticket.module.css'

interface ITicketProps {
  title: string | null | undefined
  price: number | null | undefined
  description: string | null | undefined
  purchaseIdSelf: string | null | undefined
  purchaseIdGift: string | null | undefined
}

/* eslint-disable tailwindcss/no-custom-classname */
const Ticket = ({ title, price, description, purchaseIdSelf, purchaseIdGift }: ITicketProps) => {
  const { t } = useTranslation()
  const router = useRouter()

  return (
    <div
      className={cx(
        styles.ticket,
        'goout-ticket relative mb-yMd flex min-h-ticket w-full flex-col justify-between bg-gmbLightGray p-8 last:mb-0 first-of-type:before:hidden last-of-type:after:hidden hover:bg-[#6cc7ed] lg:mb-0'
      )}
    >
      <div className="pb-yMd">
        <h3 className="text-xl">{title}</h3>
        {price && <p className="text-xl font-regular">{price}€</p>}
      </div>
      <div>
        {description ? (
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            className="relative"
            components={{
              p: ({ children }) => <p className="pb-yMd text-btn">{children}</p>,
              ul: ({ children }) => <ul className="list-disc pl-5 pb-yMd text-btn">{children}</ul>,
              ol: ({ children }) => <ol className="list-decimal pl-5 pb-yMd text-btn">{children}</ol>,
            }}
          >
            {description ?? ''}
          </ReactMarkdown>
        ) : null}
        {purchaseIdSelf ? (
          <Button
            size="small"
            className="goout-btn-buy-self w-fit px-xMd"
            data-goout-id={purchaseIdSelf}
            data-goout-ticket-category="{category may go here}"
            onClick={() => router.replace(`#goout-form`)}
          >
            {t('common.buyForYourself')}
          </Button>
        ) : null}
        {purchaseIdGift ? (
          <Button
            size="small"
            className="goout-btn-buy-gift mt-4 w-fit px-xMd"
            data-goout-id={purchaseIdGift}
            data-goout-ticket-category="{category may go here}"
            onClick={() => router.replace(`#goout-form`)}
          >
            {t('common.buyAsGift')}
          </Button>
        ) : null}
      </div>
    </div>
  )
}
/* eslint-enable tailwindcss/no-custom-classname */

export default Ticket
