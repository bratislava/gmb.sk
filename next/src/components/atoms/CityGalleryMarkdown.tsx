import cx from 'classnames'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import supersub from 'remark-supersub'

import ImageFigure from '@/src/components/atoms/ImageFigure'
import Link from '@/src/components/atoms/Link'

export interface CityGalleryMarkdownProps {
  content: string | null | undefined
  className?: string
  accentColor?: string
}

const CityGalleryMarkdown = ({ className, content, accentColor }: CityGalleryMarkdownProps) => {
  return (
    <div className={cx(className, 'relative')}>
      <ReactMarkdown
        remarkPlugins={[remarkGfm, supersub]}
        components={{
          h1: ({ node, children, ...props }) => (
            <div className="pb-yMd text-md" {...props}>
              {children}
            </div>
          ),
          h2: ({ node, children, ...props }) => (
            <h2 className="pb-yMd text-xl" {...props}>
              {children}
            </h2>
          ),
          h3: ({ node, children, ...props }) => (
            <h3 className="pb-yMd text-lg" {...props}>
              {children}
            </h3>
          ),
          h4: ({ node, children, ...props }) => (
            <h4 className="pb-yMd text-md font-semibold" {...props}>
              {children}
            </h4>
          ),
          h5: ({ node, children, ...props }) => (
            <h5 className="pb-yMd text-sm font-semibold" {...props}>
              {children}
            </h5>
          ),
          h6: ({ node, children, ...props }) => (
            <h6 className="pb-yMd text-sm font-semibold text-gmbGray" {...props}>
              {children}
            </h6>
          ),
          p: ({ node, children, ...props }) => {
            return (
              <div className="text-md not-last:pb-yMd" {...props}>
                {children}
              </div>
            )
          },
          ul: ({ node, children, ...props }) => (
            <ul className="list-disc pl-xMd text-md not-last:pb-yMd" {...props}>
              {children}
            </ul>
          ),
          ol: ({ node, children, ...props }) => (
            <ol className="list-decimal pl-xMd text-md not-last:pb-yMd" {...props}>
              {children}
            </ol>
          ),
          li: ({ children, node, ...props }) => <li {...props}>{children}</li>,
          strong: ({ node, children, ...props }) => (
            <strong className="font-medium" style={{ color: accentColor }} {...props}>
              {children}
            </strong>
          ),
          blockquote: ({ children }) => (
            <div className="border-l-4 pl-xMd not-last:pb-yMd">{children}</div>
          ),
          img: ({ src, alt, sizes, width, height }) => (
            <div className="relative">
              {src && (
                <ImageFigure src={src} alt={alt} sizes={sizes} width={width} height={height} />
              )}
            </div>
          ),
          a: ({ children, href }) => {
            const isExternal = href?.startsWith('http')
            return (
              <Link
                href={href ?? '#'}
                target={isExternal ? '_blank' : '_self'}
                preserveStyle
                noUnderline
                className="pb-yMd text-md text-gmbGray underline underline-offset-2"
              >
                {children}
                {isExternal && ' ↗'}
              </Link>
            )
          },
          table: ({ children, ...props }) => {
            return (
              <table {...props} className="mb-yMd ml-xMd border-2 px-xSm py-ySm">
                {children}
              </table>
            )
          },
          thead: ({ children, node, ...props }) => (
            <thead {...props} className="border-b-4">
              {children}
            </thead>
          ),
          tbody: ({ children, node, ...props }) => <tbody {...props}>{children}</tbody>,
          tr: ({ children, node, ...props }) => (
            <tr className="border-2" {...props}>
              {children}
            </tr>
          ),
          td: ({ children, node, ...props }) => (
            <td className="border-2 px-xSm py-ySm text-center text-md" {...props}>
              {children}
            </td>
          ),
          th: ({ children, node, ...props }) => (
            <th className="border-2 px-xSm py-ySm text-center text-md font-bold" {...props}>
              {children}
            </th>
          ),
        }}
      >
        {content ?? ''}
      </ReactMarkdown>
    </div>
  )
}

export default CityGalleryMarkdown
