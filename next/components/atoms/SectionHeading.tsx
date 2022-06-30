export interface ISectionHeadingProps {
  title: string
}

const SectionHeading = ({ title }: ISectionHeadingProps) => {
  return (
    <header className="relative bg-white py-yLg px-xMd">
      <h2 className="text-xxl">{title}</h2>
    </header>
  )
}

export default SectionHeading
