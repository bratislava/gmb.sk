import cx from 'classnames'
import { useTranslation } from 'next-i18next'
import { useRouter } from 'next/router'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

import Button from '../../atoms/Button'
import styles from './Ticket.module.css'

interface ITicketProps {
  title: string | null | undefined
  price: number | null | undefined
  description: string | null | undefined
  id: string | null | undefined
  link: string | null | undefined
}

export const Ticket = ({ title, price, description, id, link }: ITicketProps) => {
  const { t } = useTranslation()
  const router = useRouter()

  return (
    <div
      id={`ticket-${id}`}
      className={cx(
        styles.ticket,
        'goout-ticket flex flex-col mb-yStandard justify-between last:mb-0 lg:mb-0 w-full min-h-[360px] lg:min-h-[440px] 3xl:min-h-[660px] bg-gmbLightGray relative p-8 hover:bg-[#6cc7ed] last-of-type:after:hidden first-of-type:before:hidden'
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
              ul: ({ children }) => <ul className="list-disc pl-5 pb-yStandard text-btn">{children}</ul>,
              ol: ({ children }) => <ol className="list-decimal pl-5 pb-yStandard text-btn">{children}</ol>,
            }}
          >
            {description ?? ''}
          </ReactMarkdown>
        ) : null}
        {link ? (
          <Button
            size="small"
            className="goout-btn-buy-self w-fit px-xStandard"
            data-goout-id="id-here"
            data-goout-ticket-category="{category goes here}"
            onClick={() => router.replace(`#goout-form`)}
          >
            {t('common.buyForYourself')}
          </Button>
        ) : null}
        {link ? (
          <Button
            size="small"
            className="goout-btn-buy-gift mt-4 w-fit px-xStandard"
            data-goout-id="id-here"
            data-goout-ticket-category="{category goes here}"
            onClick={() => router.replace(`#goout-form`)}
          >
            {t('common.buyAsGift')}
          </Button>
        ) : null}
      </div>
    </div>
  )
}

export default Ticket
