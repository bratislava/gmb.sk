import { useTranslation } from 'next-i18next'
import { ReactMarkdown } from 'react-markdown/lib/react-markdown'
import remarkGfm from 'remark-gfm'

import LocationIcon from '../../assets/icons/location.svg'
import { ContactEntityFragment, ContentPageEntityFragment } from '../../graphql'
import { isDefined, WithAttributes } from '../../utils/isDefined'
import AppLangSwitchers from '../atoms/AppLangSwitchers'
import DownloadItem from '../atoms/DownloadItem'
import Link from '../atoms/Link'

interface FooterProps {
  contactInfo: WithAttributes<ContactEntityFragment>
  contentPage?: WithAttributes<ContentPageEntityFragment>
}

const Footer = ({ contactInfo, contentPage }: FooterProps) => {
  const { t, i18n } = useTranslation()

  const {
    name,
    openingHours,
    mirbach,
    palffy,
    quickLinks,
    quickLinksTitle,
    quickLinksTitle2,
    quickLinks2,
    disclosureMoreFiles,
  } = contactInfo.attributes

  return (
    <footer className="relative bg-gmbDark px-xStandard pb-12 pt-20 text-white">
      <div className="grid grid-cols-2 gap-x-9 gap-y-16 lg:grid-cols-4 lg:gap-y-32">
        <div className="col-span-2 flex h-full flex-col justify-between lg:col-span-1">
          <h3 className="pb-yHigh text-xl">Otvorene</h3>
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
          <h3 className="pb-yHigh text-xl">{mirbach?.title}</h3>
          <div className="text-md">
            <LocationIcon stroke="white" height="48" className="mb-2" />
            <p>{mirbach?.address}</p>
          </div>
        </div>
        <div className="col-span-1 flex h-full flex-col justify-between lg:col-span-2">
          <h3 className="pb-yHigh text-xl">{palffy?.title}</h3>
          <div className="text-md">
            <LocationIcon stroke="white" height="48" className="mb-2" />
            <p>{palffy?.address}</p>
          </div>
        </div>
        <div className="flex h-full flex-col justify-between">
          <h3 className="pb-yHigh text-xl">{quickLinksTitle}</h3>
          <div className="flex flex-col">
            {quickLinks?.map((link, index) => (
              <Link
                href={link?.url || '#'}
                target="_blank"
                key={index}
                className="overflow-hidden text-ellipsis whitespace-nowrap text-md uppercase"
                preserveStyle
              >
                {link?.title}
              </Link>
            ))}
          </div>
        </div>
        <div className="hidden h-full flex-col justify-between lg:flex">
          <h3 className="pb-yHigh text-xl">{quickLinksTitle2}</h3>
          <div className="flex flex-col">
            {quickLinks2?.map((link, index) => (
              <Link
                href={link?.url || '#'}
                target="_blank"
                key={index}
                className="overflow-hidden text-ellipsis whitespace-nowrap text-md uppercase"
                preserveStyle
              >
                {link?.title}
              </Link>
            ))}
          </div>
        </div>
        <div className="hidden h-full flex-col justify-between lg:flex">
          <h3 className="pb-yHigh text-xl">{disclosureMoreFiles?.title}</h3>
          <div className="flex flex-col">
            {disclosureMoreFiles?.files?.filter(isDefined).map((file, index) => (
              <DownloadItem
                key={index}
                downloadItem={file}
                className="!inline-block !overflow-hidden text-ellipsis whitespace-nowrap !text-left text-md"
                oneLine
              />
            ))}
          </div>
        </div>
        <div className="hidden flex-col justify-end text-right text-sm lg:flex">
          <div className="flex justify-end">
            <AppLangSwitchers contentPage={contentPage} desktop />
          </div>
          <p>&copy; 2022 {name || t('common.bratislavaCityGallery')}</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
