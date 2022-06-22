import { useTranslation } from 'next-i18next'
import { ContactEntityFragment, ContentPageEntityFragment } from '../../graphql'
import { WithAttributes } from '../../utils/isDefined'
import CityGalleryMarkdown from '../atoms/CityGalleryMarkdown'
import { SidePanelPlace } from '../atoms/SidePanelPlace'

interface FooterProps {
  contactInfo: WithAttributes<ContactEntityFragment>
  contentPage?: WithAttributes<ContentPageEntityFragment>
}

const Footer = ({ contactInfo, contentPage }: FooterProps) => {
  const { t, i18n } = useTranslation()

  const {
    name,
    email,
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
    <footer className="relative text-white bg-gmbDark px-xStandard py-yStandard">
      <div className="grid grid-flow-col grid-cols-4 grid-rows-4 h-[800px] gap-5">
        <div className="bg-blue-800">Otvorene</div>
        <div className="bg-green-800">
          <CityGalleryMarkdown content={openingHours} />
        </div>
        <div className="bg-yellow-800"></div>
        <div className="bg-purple-800 "></div>
        <div className="bg-blue-600">
          <span>Pokladňa {mirbach?.title}</span>
        </div>
        <div className="bg-green-600">
          <span>
            <SidePanelPlace
              placeFragment={{ placeTitle: '', placeAddress: '', place: { data: { attributes: mirbach } } }}
            />
          </span>
        </div>
        <div className="bg-yellow-600"></div>
        <div className="bg-purple-600"></div>
        <div className="bg-blue-400">
          <span>Pokladňa {palffy?.title}</span>
        </div>
        <div className="bg-green-400">
          <span>{palffy?.address}</span>
        </div>
        <div className="bg-yellow-400"></div>
        <div className="bg-purple-400"></div>
        <div className="row-span-3 bg-red-600"></div>
        <div className="bg-red-400"></div>
      </div>
    </footer>
  )
}

export default Footer
