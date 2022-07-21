import cx from 'classnames'

import { ImageWithFormatsEntityFragment } from '../../graphql'
import { WithAttributes } from '../../utils/isDefined'
import { Format } from '../molecules/ImageGallery'

interface ImageGalleryItemProps {
  image?: WithAttributes<ImageWithFormatsEntityFragment> | null
  className?: string
  onChoose: (index: number) => void
  index: number
}

const ImageGalleryItem = ({ image, className, onChoose, index }: ImageGalleryItemProps) => {
  if (!image) return null

  const { url, formats, alternativeText } = image.attributes
  const src = index === 0 ? url : (formats.thumbnail as Format).url
  return (
    <button type="button" className={cx(className, 'h-full w-full')} onClick={() => onChoose(index)}>
      <img src={src} alt={alternativeText ?? ''} className="h-full w-full object-cover" />
    </button>
  )
}

export default ImageGalleryItem
