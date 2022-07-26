import React from 'react'

interface ImageGalleryItemProps {
  description?: string
  fullscreen?: string // fullscreen version of img
  handleImageLoaded?: (event: any) => void
  isFullscreen?: boolean
  onImageError?: (error: any) => void
  original: string
  originalAlt?: string
  originalHeight?: number
  originalWidth?: number
  originalTitle?: string
  sizes?: string
  srcSet?: string
  loading?: 'eager' | 'lazy'
}

const ImageGalleryItem = React.memo(
  ({
    description,
    fullscreen, // fullscreen version of img
    handleImageLoaded,
    isFullscreen = false,
    onImageError,
    original,
    originalAlt,
    originalHeight,
    originalWidth,
    originalTitle,
    sizes,
    srcSet,
    loading = 'eager',
  }: ImageGalleryItemProps) => {
    const itemSrc = isFullscreen ? fullscreen || original : original

    return (
      <div className="flex h-[calc(100vh-100px)] w-full flex-col">
        {!isFullscreen && description && (
          <div className="invisible mt-1 mb-yLg min-h-0 max-w-full flex-[0_0_auto] px-xLg sm:mb-0">
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
          onError={onImageError}
          loading={loading}
        />
        {!isFullscreen && description && (
          <div className="mt-1 mb-yLg min-h-0 max-w-full flex-[0_0_auto] px-xLg sm:mb-0">
            <span className="max-w-full whitespace-normal text-btn">{description}</span>
          </div>
        )}
      </div>
    )
  }
)

export default ImageGalleryItem
