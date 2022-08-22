import { useTranslation } from 'next-i18next'
import useSWR from 'swr'

const getOEmbedUrl = (url: string) => {
  if (url.includes('soundcloud')) {
    return `https://soundcloud.com/oembed?url=${url}&format=json`
  }
  if (url.includes('podbean')) {
    return `https://www.podbean.com/media/oembed?url=${url}&format=json`
  }
  if (url.includes('spotify')) {
    return `https://open.spotify.com/oembed?url=${url}&format=json`
  }

  throw new Error(`Unsupported audio url: ${url}`)
}

interface OEmbedResponse {
  /** The response has more fields, but we are interested only in this one */
  html: string
}

const fetchOEmbedHtml = async (url: string) => {
  const oEmbedUrl = getOEmbedUrl(url)
  /** Fetch embed HTML from the oembed api for given url */
  const oembedDataPromise = fetch(oEmbedUrl).then((res) => {
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

interface AudioProps {
  /** Must be Spotify, Soundcloud or Podbean URL */
  url: string
}

type ParsedEmbedHtml = string | JSX.Element | JSX.Element[]

const Audio = ({ url }: AudioProps) => {
  const { t } = useTranslation()

  const { data: oembedHtml, error } = useSWR<ParsedEmbedHtml, Error>(url, fetchOEmbedHtml)

  if (error) {
    return <div>{t('common.error')}</div>
  }

  if (!oembedHtml) {
    return <div>{t('common.loading')}</div>
  }

  return <figure>{oembedHtml}</figure>
}

export default Audio
