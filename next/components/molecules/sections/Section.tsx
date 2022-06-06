import cx from 'classnames'
import React from 'react'
import SectionHeading from '../../atoms/SectionHeading'

interface ISectionProps {
  title?: string
  anchor?: string
  color?: 'light' | 'dark' | 'gray'
  children?: React.ReactNode
  className?: string
}

const Section = ({ title, anchor, color = 'light', children, className }: ISectionProps) => {
  return (
    <section
      id={anchor}
      className={cx(
        'relative scroll-mt-nav',
        {
          'bg-white': color === 'light',
          'bg-gmbDark text-white': color === 'dark',
          'bg-gmbLightGray': color === 'gray',
        },
        className
      )}
    >
      {title ? <SectionHeading title={title} /> : null}
      {children}
    </section>
  )
}

export default Section
