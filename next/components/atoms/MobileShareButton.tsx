import cx from 'classnames'
import { useEffect, useState } from 'react'

import ShareIcon from '../../assets/icons/share-nodes.svg'
import { getNextUrl } from '../../utils/getNextUrl'

interface MobileShareButtonProps {
  className?: string
  slug: string
  title: string
}

const MobileShareButton = ({ className, slug, title }: MobileShareButtonProps) => {
  const [hasNavigatorShare, setHasNavigatorShare] = useState<boolean>(true)
  const url = `${getNextUrl()}/detail/${slug}`

  // else throwing errors because of some server side rendering, navigator is not defined
  useEffect(() => {
    setHasNavigatorShare(!!navigator.share)
  }, [])

  const openShareDialog = () => {
    if (navigator.share) {
      navigator
        .share({
          title,
          url,
        })
        // TODO proper error handling
        // eslint-disable-next-line no-console
        .catch((error) => console.error(error))
    }
    // right now, this component will NOT be generated when navigator.share is not supported
  }

  if (!hasNavigatorShare) {
    return null
  }

  return (
    <button type="button" className={cx(className)} onClick={openShareDialog}>
      <ShareIcon className="dw-[32]" />
    </button>
  )
}

export default MobileShareButton
