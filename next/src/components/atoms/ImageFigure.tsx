interface IImageProps extends React.HTMLProps<HTMLImageElement> {}

const ImageFigure = ({ src, alt, width, height, sizes }: IImageProps) => {
  const [altText, caption] = alt?.includes('||') ? alt?.split('||') || ['', ''] : [alt, alt]

  return (
    <figure className="relative max-w-full">
      <img src={src} alt={altText} width={width} height={height} sizes={sizes} />
      {caption && <figcaption className="my-yMd block text-sm text-gmbGray">{caption}</figcaption>}
    </figure>
  )
}

export default ImageFigure
