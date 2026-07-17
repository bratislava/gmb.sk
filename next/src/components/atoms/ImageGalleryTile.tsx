import { ImageWithFormatsEntityFragment } from '@/src/services/graphql'
import cn from '@/src/utils/cn'

interface ImageGalleryTileProps {
  image?: ImageWithFormatsEntityFragment | null
  className?: string
  onChoose: (index: number) => void
  index: number
}

const ImageGalleryTile = ({ image, className, onChoose, index }: ImageGalleryTileProps) => {
  if (!image) return null

  const { url, alternativeText } = image

  return (
    <button type="button" className={cn('size-full', className)} onClick={() => onChoose(index)}>
      <img src={url} alt={alternativeText ?? ''} className="size-full object-cover" />
    </button>
  )
}

export default ImageGalleryTile
