import 'react-image-gallery/styles/css/image-gallery.css'

import { uniqueId } from 'lodash'
import { useTranslation } from 'next-i18next'
import { useState } from 'react'
import ReactImageGallery, { ReactImageGalleryItem } from 'react-image-gallery'
import Modal from 'react-modal'

import CloseButton from '../../assets/icons/close-x.svg'
import { ImageWithFormatsEntityFragment } from '../../graphql'
import StrapiImageFormat from '../../types/strapiImageFormat'
import { hasAttributes, withAttributes } from '../../utils/isDefined'
import ImageGalleryItem from '../atoms/ImageGalleryItem'
import ImageGalleryTile from '../atoms/ImageGalleryTile'

interface ImageGalleryProps {
  medias?: ImageWithFormatsEntityFragment[]
  className?: string
}

const ImageGallery = ({ medias = [], className }: ImageGalleryProps) => {
  const [showModal, setShowModal] = useState(false)
  const [imageIndex, setImageIndex] = useState(0)
  const [isFullscreen, setIsFullscreen] = useState(false)
  const { t } = useTranslation()
  const closeModal = () => {
    setShowModal(false)
  }

  if (!medias) {
    return null
  }

  const filteredMedias = medias?.filter(hasAttributes)

  const items = filteredMedias.map((media) => {
    const { alternativeText, height, width, url, formats, caption } = media.attributes
    const { thumbnail }: { thumbnail: StrapiImageFormat } = formats
    const item: ReactImageGalleryItem = {
      original: url,
      thumbnail: thumbnail.url,
      description: caption ?? undefined,
    }
    return item
  })

  const renderItem = (item: ReactImageGalleryItem) => {
    return (
      <ImageGalleryItem
        description={item.description}
        fullscreen={item.fullscreen}
        isFullscreen={isFullscreen}
        original={item.original}
        originalAlt={item.originalAlt}
        originalHeight={item.originalHeight}
        originalWidth={item.originalWidth}
        originalTitle={item.originalTitle}
        sizes={item.sizes}
        srcSet={item.srcSet}
        key={uniqueId()}
      />
    )
  }

  const renderThumbInner = (item: ReactImageGalleryItem) => {
    return (
      <span className="image-gallery-thumbnail-inner">
        <img
          className="mx-auto max-h-[80px] object-contain"
          src={item.thumbnail}
          height={item.thumbnailHeight}
          width={item.thumbnailWidth}
          alt={item.thumbnailAlt}
          title={item.thumbnailTitle}
        />
        {item.thumbnailLabel && <div className="image-gallery-thumbnail-label">{item.thumbnailLabel}</div>}
      </span>
    )
  }

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
            <ReactImageGallery
              items={items}
              startIndex={imageIndex}
              onScreenChange={setIsFullscreen}
              renderItem={renderItem}
              renderThumbInner={renderThumbInner}
            />
          </div>
        </div>
      </Modal>
      <div className="grid grid-cols-2 gap-2">
        <div>
          <ImageGalleryTile
            image={withAttributes(medias[0])}
            index={0}
            onChoose={(id) => {
              setShowModal(true)
              setImageIndex(id)
            }}
          />
        </div>
        <div className="grid grid-cols-2 grid-rows-2 gap-2">
          {filteredMedias.slice(1, 4).map((media, index) => (
            <ImageGalleryTile
              image={media}
              index={index + 1}
              onChoose={(id) => {
                setShowModal(true)
                setImageIndex(id)
              }}
              key={index}
            />
          ))}
          <button
            type="button"
            className="flex h-full w-full items-center justify-center border-2 border-gmbDark text-center"
            onClick={() => {
              setShowModal(true)
              setImageIndex(filteredMedias.length > 4 ? 4 : 0)
            }}
          >
            <span className="inline-block text-btn">{t('common.morePhotos')}</span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default ImageGallery
