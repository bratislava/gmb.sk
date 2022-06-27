import cx from 'classnames'
import { useTranslation } from 'next-i18next'

import EmailIcon from '../../assets/icons/social-platforms/E-mail.svg'
import FacebookIcon from '../../assets/icons/social-platforms/Facebook.svg'
import LinkedInIcon from '../../assets/icons/social-platforms/LinkedIn.svg'
import TwitterIcon from '../../assets/icons/social-platforms/Twitter.svg'
import WhatsAppIcon from '../../assets/icons/social-platforms/WhatsApp.svg'
import Link from './Link'

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
  const url = `${process.env.NEXT_PUBLIC_NEXT_URL}/detail/${slug}`

  const openInNewWindow: Platform[] = ['facebook']

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

  return (
    <Link
      href={encodedHref}
      target="_blank"
      onClick={(event) => {
        if (!openInNewWindow.includes(platform)) {
          return
        }
        window.open(encodedHref, t('common.share'), 'width=600,height=600')
        event.preventDefault()
      }}
    >
      <span className={cx(className)}>
        <ShareIcon {...size} className="w-[calc(32px*var(--icon-size-factor))]" />
      </span>
    </Link>
  )
}

export default ShareButton
