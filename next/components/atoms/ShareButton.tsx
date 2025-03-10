import cx from 'classnames'
import { useTranslation } from 'next-i18next'

import EmailIcon from '@/assets/icons/social-platforms/email.svg'
import FacebookIcon from '@/assets/icons/social-platforms/facebook.svg'
import LinkedInIcon from '@/assets/icons/social-platforms/linkedin.svg'
import TwitterIcon from '@/assets/icons/social-platforms/twitter.svg'
import WhatsAppIcon from '@/assets/icons/social-platforms/whatsapp.svg'
import Link from '@/components/atoms/Link'
import { getNextUrl } from '@/utils/getNextUrl'

interface ShareButtonProps {
  slug: string
  /* If platform is `'email'`, `title` attribute should be set */
  platform: Platform
  /* Title is used only for e-mail links (as e-mail subject) */
  title?: string
  className?: string
}

type Platform = 'facebook' | 'email' | 'twitter' | 'whatsapp' | 'linkedin'

const ShareButton = ({ slug, platform, title, className }: ShareButtonProps) => {
  const { t } = useTranslation()

  const defaultEmailSubject = 'Galéria mesta Bratislavy'
  const url = `${getNextUrl()}/detail/${slug}`

  const openInNewWindow = new Set<Platform>(['facebook'])

  const href = {
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${url}`,
    email: `mailto:%20?subject=${title ?? defaultEmailSubject}&body=${url}`,
    twitter: `https://www.twitter.com/share?url=${url}`,
    whatsapp: `https://wa.me/?text=${url}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${url}`,
  }[platform]

  const encodedHref = encodeURI(href)

  const iconSize = 32
  const size = { height: iconSize, width: iconSize }

  const ShareIcon = {
    facebook: FacebookIcon,
    email: EmailIcon,
    twitter: TwitterIcon,
    whatsapp: WhatsAppIcon,
    linkedin: LinkedInIcon,
  }[platform]

  const translationMap = {
    facebook: t('common.shareOn.facebook'),
    email: t('common.shareOn.email'),
    twitter: t('common.shareOn.twitter'),
    whatsapp: t('common.shareOn.whatsapp'),
    linkedin: t('common.shareOn.linkedin'),
  } satisfies Record<Platform, string>

  return (
    <Link
      href={encodedHref}
      target="_blank"
      onClick={(event) => {
        if (!openInNewWindow.has(platform)) {
          return
        }
        // eslint-disable-next-line security/detect-non-literal-fs-filename
        window.open(encodedHref, t('common.share'), 'width=600,height=600')
        event.preventDefault()
      }}
      aria-label={translationMap[platform]}
    >
      <span className={cx(className)}>
        <ShareIcon {...size} className="dw-[32]" />
      </span>
    </Link>
  )
}

export default ShareButton
