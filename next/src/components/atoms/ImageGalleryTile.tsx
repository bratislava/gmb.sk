import cx from 'classnames'

import { ImageWithFormatsEntityFragment } from '@/src/services/graphql'
import { WithAttributes } from '@/src/utils/isDefined'

interface ImageGalleryTileProps {
  image?: WithAttributes<ImageWithFormatsEntityFragment> | null
  className?: string
  onChoose: (index: number) => void
  index: number
}

const ImageGalleryTile = ({ image, className, onChoose, index }: ImageGalleryTileProps) => {
  if (!image) return null

  const { url, alternativeText } = image.attributes
  return (
    <button
      type="button"
      className={cx(className, 'h-full w-full')}
      onClick={() => onChoose(index)}
    >
      <img src={url} alt={alternativeText ?? ''} className="h-full w-full object-cover" />
    </button>
  )
}

export default ImageGalleryTile
