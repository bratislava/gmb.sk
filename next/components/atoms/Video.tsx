import cx from 'classnames'
import React from 'react'

interface IVideo {
  url: string
  className?: string
  size?: 'default' | 'custom'
}

const Video = ({ className, url, size = 'default' }: IVideo) => {
  const [embedUrl, setEmbedUrl] = React.useState('')

  const isYoutubeVideo = url?.startsWith('https://youtu.be')
  const isVimeoVideo = url?.startsWith('https://vimeo.com')

  React.useEffect(() => {
    if (isYoutubeVideo) {
      const parseYoutubeUrl = async () => {
        const oembedUrl = `https://www.youtube.com/oembed?url=${url}&format=json`
        const res = await fetch(oembedUrl)
        const { html }: { html: string } = await res.json()

        const substrStart = html.indexOf('src="') + 5
        const substrEnd = html.indexOf('oembed') + 6
        const embedUrl = html.substring(substrStart, substrEnd)

        setEmbedUrl(embedUrl)
      }

      if (url) parseYoutubeUrl()
    }
    if (isVimeoVideo) {
      const parseVimeoUrl = async () => {
        const regExp = /^.*(vimeo\.com\/)((channels\/[A-z]+\/)|(groups\/[A-z]+\/videos\/))?(\d+)/
        const match = url?.match(regExp)
        const videoId = match && match[5]
        const embedUrl = `https://player.vimeo.com/video/${videoId}`

        setEmbedUrl(embedUrl)
      }

      if (url) parseVimeoUrl()
    }
  }, [isVimeoVideo, isYoutubeVideo, url])

  if (isYoutubeVideo && embedUrl) {
    return (
      <figure
        className={cx(className, {
          'w-72 h-[162px] lg:w-[780px] lg:h-[439px]': size === 'default',
        })}
      >
        <iframe className={cx('w-full h-full')} src={embedUrl} allowFullScreen />
      </figure>
    )
  }

  if (isVimeoVideo && embedUrl) {
    return (
      <figure
        className={cx(className, {
          'w-72 h-[162px] lg:w-[780px] lg:h-[439px]': size === 'default',
        })}
      >
        <iframe className={cx('w-full h-full')} src={embedUrl} allowFullScreen />
      </figure>
    )
  }

  return null
}

export default Video
