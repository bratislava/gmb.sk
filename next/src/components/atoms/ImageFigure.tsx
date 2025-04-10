interface IImageProps extends React.HTMLProps<HTMLImageElement> {
  noCaption?: boolean
}

const ImageFigure = ({ src, alt, noCaption, width, height, sizes }: IImageProps) => {
  const [altText, caption] = alt?.includes('||') ? alt?.split('||') || ['', ''] : [alt, alt]

  return (
    <figure className="relative max-w-full">
      <img src={src} alt={altText} width={width} height={height} sizes={sizes} />
      {(caption || (!noCaption && altText)) && (
        <figcaption aria-hidden={caption === alt} className="my-yMd block text-sm text-gmbGray">
          {caption || altText}
        </figcaption>
      )}
    </figure>
  )
}

export default ImageFigure
