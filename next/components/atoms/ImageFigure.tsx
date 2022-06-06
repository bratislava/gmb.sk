import React from 'react';

interface IImageProps extends React.HTMLProps<HTMLImageElement> {
  noCaption?: boolean;
}

const ImageFigure = ({
  src,
  alt,
  noCaption,
  width,
  height,
  sizes,
}: IImageProps) => {
  return (
    <figure className="relative max-w-[400px] max-h-[400px]">
      <img src={src} alt={alt} width={width} height={height} sizes={sizes} />
      {!noCaption && alt && (
        <figcaption className="block mt-12 text-sm text-gmbGray mb-25">
          {alt}
        </figcaption>
      )}
    </figure>
  );
};

export default ImageFigure;
