import 'react-image-gallery/styles/css/image-gallery.css'

import { useTranslation } from 'next-i18next'
import { useEffect, useState } from 'react'
import ReactImageGallery, { ReactImageGalleryItem } from 'react-image-gallery'
import Modal from 'react-modal'

import CloseIcon from '../../assets/icons/close-x.svg'
import { ImageWithFormatsEntityFragment } from '../../graphql'
import { StrapiImageFormats } from '../../types/strapiImageFormats'
import { hasAttributes, withAttributes } from '../../utils/isDefined'
import useWindowDimensions from '../../utils/useWindowDimensions'
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
  const { width: windowWidth } = useWindowDimensions()
  const [renderGallery, setRenderGallery] = useState(false)
  useEffect(() => setRenderGallery(true), [])
  const closeModal = () => {
    setShowModal(false)
  }

  if (!medias) {
    return null
  }

  const filteredMedias = medias?.filter(hasAttributes)

  const items = filteredMedias.map((media) => {
    const { url, formats, caption } = media.attributes
    const { thumbnail } = formats as StrapiImageFormats
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
        key={item.original}
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

  const mediasToShow = windowWidth >= 1024 ? 5 : windowWidth >= 768 ? 4 : 3

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
            <CloseIcon className="dw-[25px]" fill="white" />
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
      {renderGallery && (
        <div className="grid grid-rows-2 gap-2">
          <div className="h-[50vh]">
            <ImageGalleryTile
              image={withAttributes(medias[0])}
              index={0}
              onChoose={(id) => {
                setShowModal(true)
                setImageIndex(id)
              }}
            />
          </div>
          <div className="grid h-[15vh] grid-cols-3 grid-rows-1 gap-2 md:grid-cols-4 lg:grid-cols-5">
            {filteredMedias
              .slice(1, mediasToShow === filteredMedias.length - 1 ? mediasToShow + 1 : mediasToShow)
              .map((media, index) => (
                <ImageGalleryTile
                  image={media}
                  index={index + 1}
                  onChoose={(id) => {
                    setShowModal(true)
                    setImageIndex(id)
                  }}
                  key={media.attributes.url}
                />
              ))}
            {filteredMedias.length > mediasToShow + 1 && (
              <button
                type="button"
                className="flex h-full w-full items-center justify-center border-2 border-gmbDark text-center"
                onClick={() => {
                  setShowModal(true)
                  setImageIndex(filteredMedias.length > mediasToShow ? mediasToShow : 0)
                }}
              >
                <span className="inline-block text-btn">
                  {t('common.morePhotos', { count: filteredMedias.length - mediasToShow })}
                </span>
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  )
}

export default ImageGallery
