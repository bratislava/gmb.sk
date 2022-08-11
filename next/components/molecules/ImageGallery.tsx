import 'react-image-gallery/styles/css/image-gallery.css'

import { useTranslation } from 'next-i18next'
import { useEffect, useRef, useState } from 'react'
import ReactImageGallery, { ReactImageGalleryItem } from 'react-image-gallery'
import Modal from 'react-modal'
import { useWindowSize } from 'rooks'
import resolveConfig from 'tailwindcss/resolveConfig'
import { KeyValuePair } from 'tailwindcss/types/config'

import CloseIcon from '../../assets/icons/close-x.svg'
import { ImageWithFormatsEntityFragment } from '../../graphql'
import tailwindConfig from '../../tailwind.config'
import { StrapiImageFormats } from '../../types/strapiImageFormats'
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
  const { innerWidth: windowWidth } = useWindowSize()
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

  const filteredMedias = [
    ...medias?.filter(hasAttributes),
    ...medias?.filter(hasAttributes),
    ...medias?.filter(hasAttributes),
  ]

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

  const fullConfig = resolveConfig(tailwindConfig as any)

  const getBreakpointValue = (value: string): number => {
    const screens = fullConfig.theme?.screens as KeyValuePair<string, string>
    if (screens && screens[value]) {
      return +screens[value].slice(0, screens[value].indexOf('px'))
    }
    return 0
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
        <div className="flex flex-col gap-[calc(8px*var(--icon-size-factor))]">
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
          <div className="grid h-fit grid-cols-3 grid-rows-1 gap-[calc(8px*var(--icon-size-factor))] sm:grid-cols-4 md:grid-cols-5">
            {filteredMedias
              .slice(1, mediasToShow === filteredMedias.length - 1 ? mediasToShow + 1 : mediasToShow)
              .map((media, index) => (
                <div ref={index === 0 ? subImageRef : null} style={{ height: subImageWidth }}>
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
