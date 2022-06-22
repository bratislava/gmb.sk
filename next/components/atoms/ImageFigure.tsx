import React from 'react'

interface IImageProps extends React.HTMLProps<HTMLImageElement> {
  noCaption?: boolean
}

const ImageFigure = ({ src, alt, noCaption, width, height, sizes }: IImageProps) => {
  return (
    <figure className="relative max-h-[400px] max-w-[400px]">
      <img src={src} alt={alt} width={width} height={height} sizes={sizes} />
      {!noCaption && alt && <figcaption className="mb-25 mt-12 block text-sm text-gmbGray">{alt}</figcaption>}
    </figure>
  )
}

export default ImageFigure
