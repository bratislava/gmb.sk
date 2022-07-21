import 'react-image-gallery/styles/css/image-gallery.css'

import { useTranslation } from 'next-i18next'
import { useState } from 'react'
import ReactImageGallery, { ReactImageGalleryItem } from 'react-image-gallery'
import Modal from 'react-modal'

import CloseButton from '../../assets/icons/close-x.svg'
import { ImageWithFormatsEntityFragment } from '../../graphql'
import { hasAttributes, withAttributes } from '../../utils/isDefined'
import ImageGalleryItem from '../atoms/ImageGalleryItem'

interface ImageGalleryProps {
  medias?: ImageWithFormatsEntityFragment[]
  className?: string
}

export type Format = {
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

const ImageGallery = ({ medias = [], className }: ImageGalleryProps) => {
  const [showModal, setShowModal] = useState(false)
  const [imageIndex, setImageIndex] = useState(0)
  const { t } = useTranslation()
  const closeModal = () => {
    setShowModal(false)
  }

  if (!medias) {
    return null
  }

  const items = medias?.filter(hasAttributes).map((media) => {
    const { alternativeText, height, width, url, formats, caption } = media.attributes
    const { thumbnail }: { thumbnail: Format } = formats
    const item: ReactImageGalleryItem = {
      original: url,
      thumbnail: thumbnail.url,
    }
    return item
  })

  return (
    <div className={className}>
      <Modal
        isOpen={showModal}
        onRequestClose={closeModal}
        ariaHideApp={false}
        className="relative h-full w-full"
        overlayClassName="bg-[rgba(0,0,0,0.9)] fixed inset-0 z-[51]"
      >
        <div className="relative flex h-full flex-col content-center justify-center text-white">
          <button type="button" className="absolute top-ySm right-xSm z-10" onClick={closeModal}>
            <CloseButton className="dw-[25px]" fill="white" />
          </button>
          <div className="">
            <ReactImageGallery items={items} startIndex={imageIndex} />
          </div>
        </div>
      </Modal>
      <div className="grid grid-cols-2 gap-2">
        <div>
          <ImageGalleryItem
            image={withAttributes(medias[0])}
            index={0}
            onChoose={(id) => {
              setShowModal(true)
              setImageIndex(id)
            }}
          />
        </div>
        <div className="grid grid-cols-2 grid-rows-2 gap-2">
          {medias
            .filter(hasAttributes)
            .slice(1, 4)
            .map((media, index) => (
              <ImageGalleryItem
                image={media}
                index={index + 1}
                onChoose={(id) => {
                  setShowModal(true)
                  setImageIndex(id)
                }}
              />
            ))}
        </div>
      </div>
    </div>
  )
}

export default ImageGallery
