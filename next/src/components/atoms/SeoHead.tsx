import Head from 'next/head'
import { useRouter } from 'next/router'
import { useTranslation } from 'next-i18next'

import { ImageEntityFragment, SeoFragment } from '@/src/services/graphql'
import { getNextUrl } from '@/src/utils/getNextUrl'

type SeoHeadProps = {
  title: string | undefined | null
  seo?: SeoFragment | null
  ogType?: string
  description?: string | null
  image?: ImageEntityFragment | null
}

/**
 * Inspired by OLO: https://github.com/bratislava/olo.sk/blob/master/next/src/components/common/SeoHead/SeoHead.tsx
 */

const SeoHead = ({ title, seo, ogType = 'website', description, image }: SeoHeadProps) => {
  const { t } = useTranslation()
  const { asPath } = useRouter()

  const fullUrl = `${getNextUrl()}${asPath}`

  const metaTitle = `${seo?.metaTitle || title || ''} – ${t('common.bratislavaCityGallery')}`

  return (
    <Head>
      <title>{`${title || ''} – ${t('common.bratislavaCityGallery')}`}</title>

      <meta name="title" content={metaTitle} />
      <meta name="description" content={seo?.metaDescription || description || ''} />
      <meta name="keywords" content={seo?.keywords ?? ''} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />

      {fullUrl ? <link rel="canonical" href={fullUrl} /> : null}

      {/* Documentation: https://ogp.me/ */}
      <meta property="og:title" content={metaTitle} />
      <meta property="og:type" content={ogType} />
      {fullUrl ? <meta property="og:url" content={fullUrl} /> : null}

      {/* TODO: Twitter's image size limit is only 1MB */}
      <meta property="og:image" content={image?.attributes?.url ?? ''} />
      <meta name="twitter:card" content="summary_large_image" />

      {/* Comments from: https://css-tricks.com/essential-meta-tags-social-media/ */}
      {/* Non-Essential, But Recommended */}
      <meta property="og:description" content={seo?.metaDescription || description || ''} />
      <meta property="og:site_name" content={t('common.bratislavaCityGallery')} />
      <meta name="twitter:image:alt" content={image?.attributes?.alternativeText ?? ''} />

      {/* Non-Essential, But Required for Analytics */}
      <meta property="fb:app_id" content="your_app_id" />
      <meta name="twitter:site" content="@website-username" />
    </Head>
  )
}

export default SeoHead
