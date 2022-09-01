import { useTranslation } from 'next-i18next'
import { ReactMarkdown } from 'react-markdown/lib/react-markdown'
import remarkGfm from 'remark-gfm'

import LocationIcon from '../../assets/icons/location.svg'
import { ContentPageEntityFragment, GeneralEntityFragment } from '../../graphql'
import { WithAttributes } from '../../utils/isDefined'
import AppLangSwitchers from '../atoms/AppLangSwitchers'
import Link from '../atoms/Link'

interface FooterProps {
  contactInfo: WithAttributes<GeneralEntityFragment>
  contentPage?: WithAttributes<ContentPageEntityFragment>
}

const Footer = ({ contactInfo, contentPage }: FooterProps) => {
  const { t } = useTranslation()

  const { name, openingHours, mirbach, palffy, socialLinks, footerLinks1, footerLinks2 } = contactInfo.attributes

  return (
    <footer className="relative bg-gmbDark px-xMd py-yLg text-white">
      <div className="grid grid-cols-2 gap-x-xMd gap-y-yLg lg:grid-cols-4">
        <div className="col-span-2 flex h-full flex-col justify-between lg:col-span-1">
          <h3 className="pb-yMd text-xl">{t('common.openingHours')}</h3>
          <div className="">
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              components={{
                p: ({ children }) => <p className="text-md">{children}</p>,
                ul: ({ children }) => <ul className="list list-disc pl-5 pb-[55px]">{children}</ul>,
              }}
            >
              {openingHours ?? ''}
            </ReactMarkdown>
          </div>
        </div>
        <div className="flex h-full flex-col justify-between">
          <h3 className="pb-yMd text-xl">{mirbach?.title}</h3>
          <div className="text-md">
            <LocationIcon className="mb-2 dw-[48]" />
            <p>{mirbach?.address}</p>
          </div>
        </div>
        <div className="col-span-1 flex h-full flex-col justify-between lg:col-span-2">
          <h3 className="pb-yMd text-xl">{palffy?.title}</h3>
          <div className="text-md">
            <LocationIcon className="mb-2 dw-[48]" />
            <p>{palffy?.address}</p>
          </div>
        </div>
        <div className="flex h-full flex-col justify-between">
          <h3 className="pb-yMd text-xl">{socialLinks?.title}</h3>
          <div className="flex flex-col">
            {socialLinks?.links?.map((link, index) => (
              <Link
                href={link?.url || '#'}
                target={link?.newWindow ?? true ? '_blank' : '_self'}
                key={index}
                className="overflow-hidden text-ellipsis whitespace-nowrap text-md uppercase"
                preserveStyle
              >
                {link?.title}
              </Link>
            ))}
          </div>
        </div>
        <div className="flex h-full flex-col justify-between">
          <h3 className="pb-yMd text-xl">{footerLinks1?.title}</h3>
          <div className="flex flex-col">
            {footerLinks1?.links?.map((link, index) => (
              <Link
                href={link?.url || '#'}
                target={link?.newWindow ?? true ? '_blank' : '_self'}
                key={index}
                className="overflow-hidden text-ellipsis whitespace-nowrap text-md uppercase"
                preserveStyle
              >
                {link?.title}
              </Link>
            ))}
          </div>
        </div>
        <div className="col-span-2 flex h-full flex-col justify-between lg:col-span-1">
          <h3 className="pb-yMd text-xl">{footerLinks2?.title}</h3>
          <div className="flex flex-col">
            {footerLinks2?.links?.map((link, index) => (
              <Link
                href={link?.url || '#'}
                target={link?.newWindow ?? true ? '_blank' : '_self'}
                key={index}
                className="overflow-hidden text-ellipsis whitespace-nowrap text-md uppercase"
                preserveStyle
              >
                {link?.title}
              </Link>
            ))}
          </div>
        </div>
        <div className="hidden flex-col justify-end text-right text-sm lg:flex">
          {/* TODO show switchers when EN content is ready */}
          {/* <div className="flex justify-end">
            <AppLangSwitchers contentPage={contentPage} desktop />
          </div> */}
          <p>&copy; 2022 {name || t('common.bratislavaCityGallery')}</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
