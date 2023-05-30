import cx from 'classnames'
import { ReactHTMLElement } from 'react'
import ReactMarkdown from 'react-markdown'
import { ReactElement } from 'react-markdown/lib/react-markdown'
import remarkGfm from 'remark-gfm'
import supersub from 'remark-supersub'

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
      remarkPlugins={[remarkGfm, supersub]}
      className={cx(className, 'relative')}
      components={{
        h1: ({ children }) => <div className="pb-yMd text-md">{children}</div>,
        h2: ({ children }) => <h2 className="pb-yMd text-xl">{children}</h2>,
        h3: ({ children }) => <h3 className="pb-yMd text-lg">{children}</h3>,
        h4: ({ children }) => <h4 className="pb-yMd text-md font-semibold">{children}</h4>,
        h5: ({ children }) => <h5 className="pb-yMd text-sm font-semibold">{children}</h5>,
        h6: ({ children }) => (
          <h6 className="pb-yMd text-sm font-semibold text-gmbGray">{children}</h6>
        ),
        p: ({ children }) => {
          if (children.some((child) => typeof child === 'string')) {
            return <div className="text-md not-last:pb-yMd">{children}</div>
          }
          return children as ReactElement
        },
        ul: ({ children }) => (
          <ul className="list-disc pl-xMd text-md not-last:pb-yMd">{children}</ul>
        ),
        ol: ({ children }) => (
          <ol className="list-decimal pl-xMd text-md not-last:pb-yMd">{children}</ol>
        ),
        strong: ({ children }) => (
          <strong className="font-medium" style={{ color: accentColor }}>
            {children}
          </strong>
        ),
        blockquote: ({ children }) => (
          <div className="border-l-4 pl-xMd not-last:pb-yMd">{children}</div>
        ),
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
              preserveStyle
              noUnderline
              className="pb-yMd text-md text-gmbGray underline underline-offset-2"
            >
              {children}
              {isExternal && ' ↗'}
            </Link>
          )
        },
        table: ({ children: [thead, tbody] }) => {
          type TableSection = ReactHTMLElement<HTMLTableSectionElement> & {
            props: {
              children?: Array<
                ReactHTMLElement<HTMLTableRowElement> & {
                  props: {
                    children?: Array<
                      ReactHTMLElement<HTMLTableCellElement> & {
                        props: { children?: Array<ReactElement> }
                      }
                    >
                  }
                }
              >
            }
          }
          const theadTyped = thead as TableSection
          const tbodyTyped = tbody as TableSection
          return (
            <table className="mb-yMd ml-xMd border-2 px-xSm py-ySm">
              <thead className="border-b-4">
                {theadTyped.props.children?.map((tr) => (
                  <tr className="border-2">
                    {tr.props.children?.map((th) => (
                      <th className="border-2 px-xSm py-ySm text-center text-md font-bold">
                        {th.props.children}
                      </th>
                    ))}
                  </tr>
                ))}
              </thead>
              <tbody>
                {tbodyTyped.props.children?.map((tr) => (
                  <tr className="border-2">
                    {tr.props.children?.map((td) => (
                      <td className="border-2 px-xSm py-ySm text-center text-md">
                        {td.props.children}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          )
        },
      }}
    >
      {content ?? ''}
    </ReactMarkdown>
  )
}

export default CityGalleryMarkdown
