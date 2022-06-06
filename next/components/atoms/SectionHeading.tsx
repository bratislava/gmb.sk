import React from 'react'

export interface ISectionHeadingProps {
  title: string
}

const SectionHeading = ({ title }: ISectionHeadingProps) => {
  return (
    <header className="relative py-10 bg-white px-xStandard md:py-16 3xl:py-20">
      <h2 className="text-xxl">{title}</h2>
    </header>
  )
}

export default SectionHeading
