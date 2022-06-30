import cx from 'classnames'
import ReactMarkdown from 'react-markdown'
import { ReactElement } from 'react-markdown/lib/react-markdown'
import remarkGfm from 'remark-gfm'

import ImageFigure from './ImageFigure'
import Link from './Link'

export interface CityGalleryMarkdownProps {
  content: string | null | undefined
  className?: string
  accentColor?: string
}

const CityGalleryMarkdown = ({ className, content, accentColor }: CityGalleryMarkdownProps) => {
  return (
    <ReactMarkdown
      remarkPlugins={[remarkGfm]}
      className={cx(className, 'relative')}
      components={{
        h1: ({ children }) => <h2 className="pb-yMd text-xxl">{children}</h2>,
        h2: ({ children }) => <h2 className="pb-yMd text-xl">{children}</h2>,
        h3: ({ children }) => <h3 className="pb-yMd text-lg">{children}</h3>,
        h4: ({ children }) => <h4 className="pb-yMd text-md font-semibold">{children}</h4>,
        h5: ({ children }) => <h5 className="pb-yMd text-sm font-semibold">{children}</h5>,
        h6: ({ children }) => <h6 className="pb-yMd text-sm font-semibold text-gmbGray">{children}</h6>,
        p: ({ children }) => {
          if (typeof children[0] === 'string') return <p className="pb-yMd text-md">{children}</p>
          return children as ReactElement
        },
        ul: ({ children }) => <ul className="list-disc py-yMd pl-xMd text-md">{children}</ul>,
        ol: ({ children }) => <ol className="list-decimal pb-yMd pl-xMd text-md">{children}</ol>,
        strong: ({ children }) => (
          <strong className="font-medium" style={{ color: accentColor }}>
            {children}
          </strong>
        ),
        blockquote: ({ children }) => <div className="border-l-4 pb-yMd pl-xMd">{children}</div>,
        img: ({ src, alt, sizes, width, height }) => (
          <div className="relative">
            {src && <ImageFigure src={src} alt={alt} sizes={sizes} width={width} height={height} />}
          </div>
        ),
        a: ({ children, href }) => {
          const isExternal = href?.startsWith('http')
          return (
            <Link
              href={href ?? '#'}
              target={isExternal ? '_blank' : '_self'}
              rel="noopener noreferrer"
              preserveStyle
              noUnderline
              className={cx('text-gmbGray underline underline-offset-2 hover:font-semibold', {
                "after:content-['↗']": isExternal,
              })}
            >
              {children}
            </Link>
          )
        },
      }}
    >
      {content ?? ''}
    </ReactMarkdown>
  )
}

export default CityGalleryMarkdown
