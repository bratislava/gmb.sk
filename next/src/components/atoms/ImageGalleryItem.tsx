import { memo } from 'react'

interface ImageGalleryItemProps {
  description?: string
  fullscreen?: string // fullscreen version of img
  isFullscreen?: boolean
  original: string
  originalAlt?: string
  originalTitle?: string
  sizes?: string
  srcSet?: string
  loading?: 'eager' | 'lazy'
}

const ImageGalleryItem = memo(
  ({
    description,
    fullscreen, // fullscreen version of img
    isFullscreen = false,
    original,
    originalAlt,
    originalTitle,
    sizes,
    srcSet,
    loading = 'eager',
  }: ImageGalleryItemProps) => {
    const itemSrc = isFullscreen ? fullscreen || original : original

    return (
      <div className="flex h-[calc(100vh-100px)] w-full flex-col">
        {!isFullscreen && description && (
          <div className="invisible mb-yLg mt-1 min-h-0 max-w-full flex-[0_0_auto] px-xLg sm:mb-0">
            <span className="max-w-full whitespace-normal text-btn">{description}</span>
          </div>
        )}
        <img
          className="min-h-0 flex-[1_1_auto] object-contain"
          src={itemSrc}
          alt={originalAlt}
          srcSet={srcSet}
          sizes={sizes}
          title={originalTitle}
          loading={loading}
        />
        {!isFullscreen && description && (
          <div className="mb-yLg mt-1 min-h-0 max-w-full flex-[0_0_auto] px-xLg sm:mb-0">
            <span className="max-w-full whitespace-normal text-btn">{description}</span>
          </div>
        )}
      </div>
    )
  }
)

export default ImageGalleryItem
