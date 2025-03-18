import cx from 'classnames'
import { useEffect, useState } from 'react'

interface IVideo {
  url: string
  className?: string
  size?: 'default' | 'custom'
}

const Video = ({ className, url, size = 'default' }: IVideo) => {
  const [embedUrl, setEmbedUrl] = useState('')

  const isYoutubeVideo =
    url?.startsWith('https://youtu.be') || url?.startsWith('https://www.youtube.com')
  const isVimeoVideo = url?.startsWith('https://vimeo.com')

  useEffect(() => {
    if (isYoutubeVideo) {
      const parseYoutubeUrl = async () => {
        const oembedUrl = `https://www.youtube.com/oembed?url=${url}&format=json`
        const res = await fetch(oembedUrl)
        const { html }: { html: string } = await res.json()

        const substrStart = html.indexOf('src="') + 5
        const substrEnd = html.indexOf('oembed') + 6
        const embedUrlInner = html.slice(substrStart, substrEnd)

        setEmbedUrl(embedUrlInner)
      }

      // eslint-disable-next-line @typescript-eslint/no-floating-promises
      if (url) parseYoutubeUrl()
    }
    if (isVimeoVideo) {
      const parseVimeoUrl = async () => {
        const regExp = /^.*(vimeo\.com\/)((channels\/[A-z]+\/)|(groups\/[A-z]+\/videos\/))?(\d+)/
        const match = url?.match(regExp)
        const videoId = match && match[5]

        if (videoId) {
          const embedUrlInner = `https://player.vimeo.com/video/${videoId}`
          setEmbedUrl(embedUrlInner)
        }
      }

      // eslint-disable-next-line @typescript-eslint/no-floating-promises
      if (url) parseVimeoUrl()
    }
  }, [isVimeoVideo, isYoutubeVideo, url])

  if (isYoutubeVideo && embedUrl) {
    return (
      <figure
        className={cx(className, {
          'aspect-video w-full': size === 'default',
        })}
      >
        <iframe
          title="Youtube video"
          className={cx('h-full w-full')}
          src={embedUrl}
          allowFullScreen
        />
      </figure>
    )
  }

  if (isVimeoVideo && embedUrl) {
    return (
      <figure
        className={cx(className, {
          'aspect-video w-full': size === 'default',
        })}
      >
        <iframe
          title="Vimeo video"
          className={cx('h-full w-full')}
          src={embedUrl}
          allowFullScreen
        />
      </figure>
    )
  }

  return null
}

export default Video
