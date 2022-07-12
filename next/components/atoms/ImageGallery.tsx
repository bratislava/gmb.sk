import 'react-image-gallery/styles/css/image-gallery.css'
import 'react-responsive-carousel/lib/styles/carousel.min.css' // requires a loader

import { useTranslation } from 'next-i18next'
import { ReactElement, useState } from 'react'
import ReactImageGallery, { ReactImageGalleryItem } from 'react-image-gallery'
import Modal from 'react-modal'

import CloseButton from '../../assets/icons/close-x.svg'
import { ImageWithFormatsEntityFragment } from '../../graphql'
import { hasAttributes } from '../../utils/isDefined'

interface ImageGalleryProps {
  medias?: ImageWithFormatsEntityFragment[]
  className?: string
}

type Format = {
  ext: string
  hash: string
  height: number
  mime: string
  name: string
  path: string | null
  size: number
  url: string
  width: number
}

const ImageGallery = ({ medias, className }: ImageGalleryProps) => {
  const { t } = useTranslation()
  const [showModal, setShowModal] = useState(false)
  const closeModal = () => {
    setShowModal(false)
  }

  if (!medias) {
    return null
  }

  const images: ReactElement[] = []
  const items: ReactImageGalleryItem[] = []
  medias?.filter(hasAttributes).forEach((media) => {
    const { alternativeText, height, width, url, formats } = media.attributes
    const { thumbnail }: { thumbnail: Format } = formats
    const reactImageGalleryItem = {
      original: url,
      thumbnail: thumbnail.url,
      originalClass: 'h-full',
    }
    const image = (
      <div className="relative max-h-[500px]">
        <img src={url} alt={alternativeText ?? ''} className="h-full object-contain" />
        {/* <img src={thumbnail.url} alt={alternativeText ?? ''} /> */}
      </div>
    )
    items.push(reactImageGalleryItem)
    images.push(image)
  })

  return (
    <div className={className}>
      <Modal
        isOpen={showModal}
        onRequestClose={closeModal}
        ariaHideApp={false}
        className="relative h-full w-full"
        overlayClassName="bg-[rgba(0,0,0,0.9)] fixed inset-0"
      >
        <div className="relative top-[calc(var(--height-nav)+var(--padding-y-md))] flex h-[calc(100vh-var(--height-nav)-2*var(--padding-y-md))] flex-col text-white">
          <div className="mb-[10px] flex w-full flex-[0_0_auto] items-center justify-between border-b py-ySm px-xSm">
            <h1 className="text-lg">{t('cookieConsent.modalTitle')}</h1>
            <button type="button" onClick={closeModal}>
              <CloseButton className="dw-[25px]" fill="white" />
            </button>
          </div>
          <div className="min-h-0 flex-[1_1_auto]">
            <ReactImageGallery items={items} />
            {/* <Carousel className="h-full" dynamicHeight={false}>
              {images}
  </Carousel> */}
          </div>
        </div>
      </Modal>
      <div onClick={() => setShowModal(true)}>
        <img src={medias[0].attributes?.url} />
      </div>
    </div>
  )
}

export default ImageGallery
