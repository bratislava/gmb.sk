import cx from 'classnames'

interface ITagPRops {
  title: string
  slug?: string
  isActive?: boolean
  onClick?: () => unknown
}

const Tag = ({ title, isActive = false, onClick }: ITagPRops) => {
  return (
    <div
      onClick={onClick}
      onKeyPress={onClick}
      role="button"
      tabIndex={0}
      aria-pressed={isActive}
      className={cx(
        'flex justify-center border-2 border-white px-[calc(30px*var(--icon-size-factor))] py-[calc(12px*var(--icon-size-factor))] text-center text-nav uppercase',
        {
          'bg-white text-gmbDark': isActive,
        }
      )}
    >
      {title}
    </div>
  )
}

export default Tag
