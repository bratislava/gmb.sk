import cx from 'classnames'
import { useTranslation } from 'next-i18next'
import React from 'react'
import useSWR from 'swr'

interface AudioProps {
  url: string
}

interface SoundCloudResponse {
  /** The response has more fields, but we are interested only in this one */
  html: string
}

const Audio = ({ url }: AudioProps) => {
  const { t } = useTranslation()

  const { data: embedSoundCloudHtml, error } = useSWR<string | JSX.Element | JSX.Element[], Error>(
    `soundcloudEmbed ${url}`,
    async () => {
      /** Fetch embed HTML from the Soundcloud api for given url */
      const soundCloudEmbedDataPromise = fetch(`https://soundcloud.com/oembed?url=${url}&format=json`).then((res) => {
        if (res.ok) {
          return res.json() as Promise<SoundCloudResponse>
        }
        throw new Error('Failed to fetch SoundCloud embed data')
      })

      /** Lazy load library to parse the html response from soundcloud api */
      const htmlParserPromise = import('html-react-parser')

      const [soundCloudData, htmlParser] = await Promise.all([soundCloudEmbedDataPromise, htmlParserPromise])

      return htmlParser.default(soundCloudData.html)
    }
  )

  if (error) {
    return <div>{t('common.error')}</div>
  }

  if (!embedSoundCloudHtml) {
    return <div>{t('common.loading')}</div>
  }

  return <figure>{embedSoundCloudHtml}</figure>
}

export default Audio
