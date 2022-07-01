import cx from 'classnames'
import React from 'react'
import useSWR from 'swr'

interface AudioProps {
  url: string
  className?: string
  size?: 'default' | 'custom'
}

const Audio = ({ className, url, size = 'default' }: AudioProps) => {
  // const isYoutubeVideo = url?.startsWith('https://youtu.be') || url?.startsWith('https://www.youtube.com')
  // const isVimeoVideo = url?.startsWith('https://vimeo.com')
  const { data, error } = useSWR('soundcloudEmbed', () =>
    fetch(`https://soundcloud.com/oembed?url=${url}&format=json`).then((res) => res.json())
  )
  console.log('🚀 ~ file: Audio.tsx ~ line 15 ~ Audio ~ data', data)

  return (
    <figure
      className={cx(className, {
        'w-full aspect-video': size === 'default',
      })}
    >
      {/* <iframe title="Youtube video" className={cx('w-full h-full')} src={embedUrl} allowFullScreen /> */}
      <div dangerouslySetInnerHTML={{ __html: data.html }} />
    </figure>
  )
}

export default Audio
