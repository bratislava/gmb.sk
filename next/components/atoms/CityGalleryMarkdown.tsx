import cx from 'classnames';
import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import ImageFigure from './ImageFigure';
import Link from './Link';

export interface CityGalleryMarkdownProps {
  content: string | null | undefined;
  className?: string;
  accentColor?: string;
}

const CityGalleryMarkdown = ({
  className,
  content,
  accentColor,
}: CityGalleryMarkdownProps) => {
  return (
    <ReactMarkdown
      remarkPlugins={[remarkGfm]}
      className={cx(className, 'relative')}
      components={{
        h1: ({ children }) => <h2 className="pb-10 text-xxl">{children}</h2>,
        h2: ({ children }) => <h2 className="pb-10 text-xl">{children}</h2>,
        h3: ({ children }) => <h3 className="pb-8 text-lg">{children}</h3>,
        h4: ({ children }) => (
          <h4 className="pb-8 font-semibold text-md">{children}</h4>
        ),
        h5: ({ children }) => (
          <h5 className="pb-6 text-sm font-semibold">{children}</h5>
        ),
        h6: ({ children }) => (
          <h6 className="pb-6 text-sm font-semibold text-gmbGray">
            {children}
          </h6>
        ),
        p: ({ children }) => <p className="pb-6 text-md">{children}</p>,
        ul: ({ children }) => (
          <ul className="pb-6 list-disc pl-14 text-md">{children}</ul>
        ),
        ol: ({ children }) => (
          <ol className="pb-6 list-decimal pl-14 text-md">{children}</ol>
        ),
        strong: ({ children }) => (
          <strong className="font-medium" style={{ color: accentColor }}>
            {children}
          </strong>
        ),
        blockquote: ({ children }) => (
          <div className="pb-6 pl-10 border-l-4">{children}</div>
        ),
        img: ({ src, alt }) => (
          <div className="relative">
            {src && <ImageFigure src={src} alt={alt} />}
          </div>
        ),
        a: ({ children, href }) => {
          const isExternal = href?.startsWith('http');
          return (
            <Link
              href={href ?? '#'}
              target={isExternal ? '_blank' : '_self'}
              rel="noopener noreferrer"
              preserveStyle
              noUnderline
              className={cx(
                'text-gmbGray underline underline-offset-2 hover:font-semibold',
                {
                  "after:content-['↗']": isExternal,
                }
              )}
            >
              {children}
            </Link>
          );
        },
      }}
    >
      {content ?? ''}
    </ReactMarkdown>
  );
};

export default CityGalleryMarkdown;
