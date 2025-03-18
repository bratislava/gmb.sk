import 'react-image-gallery/styles/css/image-gallery.css'

import { useTranslation } from 'next-i18next'
import { useEffect, useRef, useState } from 'react'
import ReactImageGallery, { ReactImageGalleryItem } from 'react-image-gallery'
import Modal from 'react-modal'
import { useWindowSize } from 'rooks'

import CloseIcon from '@/src/assets/icons/close-x.svg'
import ImageGalleryItem from '@/src/components/atoms/ImageGalleryItem'
import ImageGalleryTile from '@/src/components/atoms/ImageGalleryTile'
import { ImageWithFormatsEntityFragment } from '@/src/services/graphql'
import { StrapiImageFormats } from '@/src/types/strapiImageFormats'
import { getBreakpointValue } from '@/src/utils/getBreakpointValue'
import { hasAttributes, withAttributes } from '@/src/utils/isDefined'

interface ImageGalleryProps {
  medias?: ImageWithFormatsEntityFragment[]
  className?: string
}

const ImageGallery = ({ medias = [], className }: ImageGalleryProps) => {
  const { t } = useTranslation()
  const { innerWidth: windowWidth } = useWindowSize()

  const [showModal, setShowModal] = useState(false)
  const [imageIndex, setImageIndex] = useState(0)
  const [isFullscreen, setIsFullscreen] = useState(false)
  const [renderGallery, setRenderGallery] = useState(false)
  const [subImageWidth, setSubImageWidth] = useState<number | undefined>()

  const subImageRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setRenderGallery(true)
  }, [])

  useEffect(() => {
    setSubImageWidth(subImageRef.current?.clientWidth)
  }, [windowWidth, renderGallery])

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
        sizes={item.sizes}
        srcSet={item.srcSet}
        key={item.original}
      />
    )
  }

  const renderThumbInner = (item: ReactImageGalleryItem) => {
    return (
      // eslint-disable-next-line tailwindcss/no-custom-classname
      <span className="image-gallery-thumbnail-inner">
        <img
          className="mx-auto max-h-[80px] object-contain"
          src={item.thumbnail}
          height={item.thumbnailHeight}
          width={item.thumbnailWidth}
          alt={item.thumbnailAlt}
          title={item.thumbnailTitle}
        />
        {/* eslint-disable-next-line tailwindcss/no-custom-classname */}
        {item.thumbnailLabel && (
          <div className="image-gallery-thumbnail-label">{item.thumbnailLabel}</div>
        )}
      </span>
    )
  }

  const mediasToShow = windowWidth
    ? windowWidth >= getBreakpointValue('md')
      ? 5
      : windowWidth >= getBreakpointValue('sm')
      ? 4
      : 3
    : 0

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
          <button type="button" className="absolute right-xSm top-ySm z-10" onClick={closeModal}>
            <CloseIcon className="dw-[25]" />
          </button>
          <div>
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
        <div className="flex flex-col gap-[calc(8*var(--size-factor))]">
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
          <div className="grid h-fit grid-cols-3 grid-rows-1 gap-[calc(8*var(--size-factor))] sm:grid-cols-4 md:grid-cols-5">
            {filteredMedias
              .slice(
                1,
                mediasToShow === filteredMedias.length - 1 ? mediasToShow + 1 : mediasToShow
              )
              .map((media, index) => (
                <div
                  key={media.attributes.url}
                  ref={index === 0 ? subImageRef : null}
                  style={{ height: subImageWidth }}
                >
                  <ImageGalleryTile
                    image={media}
                    index={index + 1}
                    onChoose={(id) => {
                      setShowModal(true)
                      setImageIndex(id)
                    }}
                    key={media.attributes.url}
                  />
                </div>
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
