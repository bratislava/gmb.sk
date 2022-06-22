import cx from 'classnames'
import { useTranslation } from 'next-i18next'
import React from 'react'

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
  const url = `${process.env.NEXT_URL}/detail/${slug}`

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

  const content = {
    facebook: <FacebookIcon {...size} />,
    email: <EmailIcon {...size} />,
    twitter: <TwitterIcon {...size} />,
    whatsapp: <WhatsAppIcon {...size} />,
    linkedin: <LinkedInIcon {...size} />,
  }[platform]

  return (
    <Link
      href={encodedHref}
      target="_blank"
      onClick={(event) => {
        if (!openInNewWindow.includes(platform)) {
          return
        }
        window.open(href, t('common.share'), 'width=600,height=600')
        event.preventDefault()
      }}
    >
      <span className={cx(className, 'w-8 h-8')}>{content}</span>
    </Link>
  )
}

export default ShareButton
