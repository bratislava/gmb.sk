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
      className={cx(
        'flex justify-center text-center border-2 border-white px-[calc(30px*var(--icon-size-factor))] py-[calc(12px*var(--icon-size-factor))] uppercase text-nav',
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
