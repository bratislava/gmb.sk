import { useTranslation } from 'next-i18next'
import Head from 'next/head'
import { SeoFragment } from '../../graphql'

interface SeoProps {
  seo: SeoFragment
  ogType?: string
  title?: string
  description?: string
  image?: { url?: string; alternativeText?: string | null }
}

const Seo = ({ seo, ogType = 'website', title, description, image }: SeoProps) => {
  const { t } = useTranslation()

  //TODO: Get Strapi url
  const strapiUrl = 'http://localhost:1337' //process.env.STRAPI_URL

  if (image && image.url?.startsWith('/')) {
    image.url = `${strapiUrl}${image.url}`
  }

  return (
    <Head>
      {seo && (
        <>
          <meta name="title" content={seo.metaTitle ?? title ?? ''} />
          <meta name="description" content={seo.metaDescription ?? description ?? ''} />
          <meta name="keywords" content={seo.keywords ?? ''} />
          <meta name="viewport" content={seo.metaViewport ?? 'width=device-width, initial-scale=1'} />
          <meta name="robots" content={seo.metaRobots ?? ''} />
          <meta name="canonical" content={seo.canonicalUrl ?? ''} />

          {/* Documentation: https://ogp.me/ */}
          <meta property="og:title" content={seo?.metaTitle ?? title ?? ''} />
          <meta property="og:type" content={ogType} />
          <meta property="og:url" content={seo?.canonicalUrl ?? ''} />
          {/* TODO: Twitter's image size limit is only 1MB */}
          <meta property="og:image" content={image?.url || 'seo?.metaImage.url'} />
          <meta name="twitter:card" content="summary_large_image" />

          {/* Comments from: https://css-tricks.com/essential-meta-tags-social-media/ */}
          {/* Non-Essential, But Recommended */}
          <meta property="og:description" content={seo.metaDescription ?? description ?? ''} />
          <meta property="og:site_name" content={t('common.bratislavaCityGallery')} />
          <meta name="twitter:image:alt" content={image?.alternativeText || 'seo?.metaImage.alternativeText'} />

          {/* Non-Essential, But Required for Analytics */}
          <meta property="fb:app_id" content="your_app_id" />
          <meta name="twitter:site" content="@website-username"></meta>
        </>
      )}
    </Head>
  )
}

export default Seo
