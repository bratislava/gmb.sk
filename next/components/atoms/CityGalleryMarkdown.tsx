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
}

const CityGalleryMarkdown = ({ className, content }: CityGalleryMarkdownProps) => {
  return (
    <ReactMarkdown
      remarkPlugins={[remarkGfm, supersub]}
      className={cx(className, 'relative')}
      components={{
        /* eslint-disable jsx-a11y/heading-has-content */
        // We don't want to use h1 in markdown, so it returns standard <p> tag
        h1: 'p',
        h2: ({ node, level, ...props }) => <h2 className="pb-yMd text-xl" {...props} />,
        h3: ({ node, level, ...props }) => <h3 className="pb-yMd text-lg" {...props} />,
        h4: ({ node, level, ...props }) => <h4 className="pb-yMd text-md font-semibold" {...props} />,
        h5: ({ node, level, ...props }) => <h5 className="pb-yMd text-sm font-semibold" {...props} />,
        h6: ({ node, level, ...props }) => <h6 className="pb-yMd text-sm font-semibold text-gmbGray" {...props} />,
        /* eslint-enable jsx-a11y/heading-has-content */
        p: ({ node, ...props }) => <p className="text-md not-last:pb-yMd" {...props} />,

        ul: ({ node, depth, ordered, ...props }) => (
          <ul className="list-disc pl-xMd text-md not-last:pb-yMd" {...props} />
        ),
        ol: ({ node, depth, ordered, ...props }) => (
          <ol className="list-decimal pl-xMd text-md not-last:pb-yMd" {...props} />
        ),
        strong: ({ node, ...props }) => <strong className="font-semibold" {...props} />,
        blockquote: ({ children }) => <blockquote className="border-l-4 pl-xMd not-last:pb-yMd">{children}</blockquote>,
        img: ({ src, alt, sizes, width, height }) => (
          <div className="relative">
            {src && <ImageFigure src={src} alt={alt} sizes={sizes} width={width} height={height} />}
          </div>
        ),
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        a: ({ node, title, children, href }) => {
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
                      <th className="border-2 px-xSm py-ySm text-center text-md font-bold">{th.props.children}</th>
                    ))}
                  </tr>
                ))}
              </thead>
              <tbody>
                {tbodyTyped.props.children?.map((tr) => (
                  <tr className="border-2">
                    {tr.props.children?.map((td) => (
                      <td className="border-2 px-xSm py-ySm text-center text-md">{td.props.children}</td>
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
