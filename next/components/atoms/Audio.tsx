import cx from 'classnames'
import { useTranslation } from 'next-i18next'
import React from 'react'
import useSWR from 'swr'

interface AudioProps {
  url: string
}

interface OEmbedResponse {
  /** The response has more fields, but we are interested only in this one */
  html: string
}

type ParsedEmbedHtml = string | JSX.Element | JSX.Element[]

const fetchOEmbedHtml = async (embedUrl: string) => {
  /** Fetch embed HTML from the oembed api for given url */
  const oembedDataPromise = fetch(embedUrl).then((res) => {
    if (res.ok) {
      return res.json() as Promise<OEmbedResponse>
    }
    throw new Error('Failed to fetch Audio embed data')
  })

  /** Lazy load library to parse the html response in embed api */
  const htmlParserPromise = import('html-react-parser')

  const [oembedResponse, htmlParser] = await Promise.all([oembedDataPromise, htmlParserPromise])

  return htmlParser.default(oembedResponse.html)
}

const Audio = ({ url }: AudioProps) => {
  const { t } = useTranslation()
  const isSoundCloud = url.includes('soundcloud')

  const embedUrl = isSoundCloud
    ? `https://soundcloud.com/oembed?url=${url}&format=json`
    : `https://open.spotify.com/oembed?url=${url}&format=json`

  const { data: oembedHtml, error } = useSWR<ParsedEmbedHtml, Error>(embedUrl, fetchOEmbedHtml)

  if (error) {
    return <div>{t('common.error')}</div>
  }

  if (!oembedHtml) {
    return <div>{t('common.loading')}</div>
  }

  return <figure>{oembedHtml}</figure>
}

export default Audio


