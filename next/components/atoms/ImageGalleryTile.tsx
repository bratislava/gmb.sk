import cx from 'classnames'

import { ImageWithFormatsEntityFragment } from '../../graphql'
import StrapiImageFormat from '../../types/strapiImageFormat'
import { WithAttributes } from '../../utils/isDefined'

interface ImageGalleryTileProps {
  image?: WithAttributes<ImageWithFormatsEntityFragment> | null
  className?: string
  onChoose: (index: number) => void
  index: number
}

const ImageGalleryTile = ({ image, className, onChoose, index }: ImageGalleryTileProps) => {
  if (!image) return null

  const { url, formats, alternativeText } = image.attributes
  const src =
    index === 0 ? url : Object.hasOwn(formats, 'thumbnail') ? (formats.thumbnail as StrapiImageFormat).url : url
  return (
    <button type="button" className={cx(className, 'h-full w-full')} onClick={() => onChoose(index)}>
      <img src={src} alt={alternativeText ?? ''} className="h-full w-full object-cover" />
    </button>
  )
}

export default ImageGalleryTile
