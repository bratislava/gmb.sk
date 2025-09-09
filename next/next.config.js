const i18nextConfig = require('./next-i18next.config')
const svgoConfig = require('./svgo.config.js')

/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  i18n: i18nextConfig.i18n,
  reactStrictMode: true,
  output: 'standalone',
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
      },
      {
        protocol: 'https',
        hostname: 'cdn-api.bratislava.sk',
      },
      {
        protocol: 'https',
        hostname: '*.s3.bratislava.sk',
      },
    ],
  },
  serverRuntimeConfig: {
    strapiUrl: process.env.STRAPI_URL,
  },

  async rewrites() {
    return {
      beforeFiles: [
        // Graphql Proxy
        {
          source: '/graphql',
          destination: `${process.env.STRAPI_URL}/graphql`,
        },
        // Media proxy for getting media from Strapi
        {
          source: '/uploads/:file',
          destination: `${process.env.STRAPI_URL}/uploads/:file`,
        },
        /**
         * Rewrites to make the translation of URL work. Based on an approached outlined here:
         * https://stackoverflow.com/questions/68723485/how-to-setup-i18n-translated-url-routes-in-next-js/68731057#68731057
         */
        {
          source: '/tickets/:event',
          destination: '/vstupenky/:event',
        },
      ],
    }
  },
  async redirects() {
    return [
      {
        source: '/robots.txt',
        destination: '/api/robots',
        permanent: true,
      },
      {
        source: '/sk/home',
        destination: '/',
        permanent: true,
        locale: false,
      },
      {
        source: '/en/home',
        destination: '/en',
        permanent: true,
        locale: false,
      },
      {
        source: '/sk/content/mirbachov-palac',
        destination: '/detail/mirbachov-palac',
        permanent: true,
        locale: false,
      },
      {
        source: '/sk/content/palffyho-palac',
        destination: '/detail/palffyho-palac',
        permanent: true,
        locale: false,
      },
      {
        source: '/en/content/mirbach-palace',
        destination: '/en/detail/mirbach-palace',
        permanent: true,
        locale: false,
      },
      {
        source: '/en/content/palffy-palace',
        destination: '/en/detail/palffy-palace',
        permanent: true,
        locale: false,
      },
      {
        source: '/en/content/mirbachov-palac',
        destination: '/en/detail/mirbach-palace',
        permanent: true,
        locale: false,
      },
      {
        source: '/en/content/palffyho-palac',
        destination: '/en/detail/palffy-palace',
        permanent: true,
        locale: false,
      },
      {
        source: '/sk/content/kde-nas-najdete',
        destination: '/navstivte',
        permanent: true,
        locale: false,
      },
      {
        source: '/sk/search/results',
        destination: '/',
        permanent: true,
        locale: false,
      },
      {
        source: '/en/search/results',
        destination: '/en',
        permanent: true,
        locale: false,
      },
      {
        source: '/sk/content/cennik-sluzieb',
        destination: '/navstivte',
        permanent: true,
        locale: false,
      },
      {
        source: '/sk/content/historia',
        destination: '/detail/historia-gmb',
        permanent: true,
        locale: false,
      },
      {
        source: '/sk/content/historia-2',
        destination: '/detail/historia-gmb',
        permanent: true,
        locale: false,
      },
      {
        source: '/sk/content/informacie-k-osobnym-udajom',
        destination: '/detail/ochrana-osobnych-udajov',
        permanent: true,
        locale: false,
      },
      {
        source: '/sk/content/podcasty-a-videa',
        destination: '/objavujte',
        permanent: true,
        locale: false,
      },
      {
        source: '/sk/content/pracovne-pozicie',
        destination: '/detail/spolupracuj-s-gmb',
        permanent: true,
        locale: false,
      },
      {
        source: '/sk/content/prenajmy',
        destination: '/detail/prenajom-priestorov',
        permanent: true,
        locale: false,
      },
      {
        source: '/sk/content/vstupne',
        destination: '/navstivte',
        permanent: true,
        locale: false,
      },
      {
        source: '/sk/content/zapozicavanie-zbierkovych-predmetov',
        destination: '/detail/vypozicky-zbierkovych-predmetov',
        permanent: true,
        locale: false,
      },
      {
        source: '/sk/content/ziadost-o-vystavu-v-gmb',
        destination: '/detail/ziadost-o-vystavu',
        permanent: true,
        locale: false,
      },
      {
        source: '/sk/content/zverejnovanie-informacii',
        destination: '/zverejnovanie-informacii',
        permanent: true,
        locale: false,
      },
      {
        source: '/sk/content/budovy',
        destination: '/o-galerii',
        permanent: true,
        locale: false,
      },
      {
        source: '/en/content/buildings',
        destination: '/en/about-gallery',
        permanent: true,
        locale: false,
      },
      {
        source: '/en/content/about-us',
        destination: '/en/about-gallery',
        permanent: true,
        locale: false,
      },
      {
        source: '/sk/content/adresar-zamestnancov',
        destination: '/detail/organizacna-struktura-gmb',
        permanent: true,
        locale: false,
      },
      {
        source: '/sk/content/poslanie',
        destination: '/detail/vizia-gmb',
        permanent: true,
        locale: false,
      },
      {
        source: '/sk/content/sluzby',
        destination: '/navstivte',
        permanent: true,
        locale: false,
      },
      {
        source: '/en/content/services',
        destination: '/en/visit-us',
        permanent: true,
        locale: false,
      },
      {
        source: '/sk/content/verejnost',
        destination: '/vystavy',
        permanent: true,
        locale: false,
      },
      {
        source: '/sk/exhibition/detail/pribehy-a-fenomeny-slovenske-vytvarne-umenie-20-storocia-ii',
        destination: '/detail/fenomeny-slovenske-vytvarne-umenie-druhej-polovice-20-storocia',
        permanent: true,
        locale: false,
      },
      {
        source: '/sk/exhibition/detail/vystavny-plan-2021',
        destination: '/detail/vystavny-plan',
        permanent: true,
        locale: false,
      },
      {
        source: '/sk/content/koncerty',
        destination: '/vystavy',
        permanent: true,
        locale: false,
      },
      {
        source: '/sk/content/sprievodne-podujatia',
        destination: '/vystavy',
        permanent: true,
        locale: false,
      },
      {
        source: '/sk/exhibition/detail/zivot-v-galeriie',
        destination: '/detail/scherzovci',
        permanent: true,
        locale: false,
      },
      {
        source: '/sk/news/view/170',
        destination: '/detail/anton-jaszusch-maliar-a-vizionar',
        permanent: true,
        locale: false,
      },
      {
        source: '/sk/exhibition/detail/zbierka-umenia-20-a-21-storocia',
        destination: '/detail/zbierka-1900-1960',
        permanent: true,
        locale: false,
      },
      {
        source: '/sk/exhibition/detail/zbierka-starej-kresby-a-grafiky',
        destination: '/detail/kresba-grafika-do-1900',
        permanent: true,
        locale: false,
      },
      {
        source: '/sk/exhibition/detail/zbierka-stareho-umenia',
        destination: '/detail/malba-socha-do-1900',
        permanent: true,
        locale: false,
      },
      {
        source: '/sk/exhibition/detail/stredoeuropske-barokove-maliarstvo-a-socharstvo',
        destination: '/detail/stredoeuropske-barokove-maliarstvo-a-socharstvo',
        permanent: true,
        locale: false,
      },
      {
        source: '/sk/exhibition/detail/spomienka-na-karola-barona',
        destination: '/detail/avers-revers-alebo-nic-nie-je-take-ako-sa-zda',
        permanent: true,
        locale: false,
      },
      {
        source: '/sk/exhibition/detail/rezidencia-gmb',
        destination: '/detail/rezidencny-program',
        permanent: true,
        locale: false,
      },
      {
        source: '/sk/exhibition/detail/prezentacia-vysledkov-restaurovania-diela-kralovna-anjelov',
        destination: '/detail/panna-maria-ako-kralovna-anjelov',
        permanent: true,
        locale: false,
      },
      {
        source: '/sk/exhibition/detail/poldruha-storocia-maliarstvo-a-socharstvo-1800-1950',
        destination: '/detail/poldruha-storocia-maliarstvo-a-socharstvo-1800-1950',
        permanent: true,
        locale: false,
      },
      {
        source: '/sk/exhibition/detail/keltska-mincovna-v-bratislave',
        destination: '/detail/biatec-keltska-mincovna',
        permanent: true,
        locale: false,
      },
      {
        source: '/sk/exhibition/detail/graficke-kabinety-v-mirbachovom-palaci',
        destination: '/detail/graficke-kabinety',
        permanent: true,
        locale: false,
      },
      {
        source: '/sk/exhibition/detail/goticka-malba-a-plastika',
        destination: '/detail/goticka-tabulova-malba-a-plastika',
        permanent: true,
        locale: false,
      },
      {
        source: '/sk/exhibition/detail/anglicke-gobeliny',
        destination: '/detail/anglicke-tapiserie',
        permanent: true,
        locale: false,
      },
      {
        source: '/sk/exhibition/detail/13',
        destination: '/detail/goticka-tabulova-malba-a-plastika',
        locale: false,
        permanent: true,
      },
      {
        source: '/sk/exhibition/detail/131',
        destination: '/detail/martin-benka-1888-1971',
        permanent: true,
        locale: false,
      },
      {
        source: '/sk/exhibition/detail/14',
        destination: '/detail/stredoeuropske-barokove-maliarstvo-a-socharstvo',
        permanent: true,
        locale: false,
      },
      {
        source: '/sk/exhibition/detail/146',
        destination: '/detail/fenomeny-slovenske-vytvarne-umenie-druhej-polovice-20-storocia',
        permanent: true,
        locale: false,
      },
      {
        source: '/sk/exhibition/detail/196',
        destination: '/detail/obrazaren',
        permanent: true,
        locale: false,
      },
      {
        source: '/sk/exhibition/detail/219',
        destination: '/detail/milan-bockay',
        permanent: true,
        locale: false,
      },
      {
        source: '/sk/exhibition/detail/290',
        destination: '/detail/katarina-vavrova-vyznanie-mojmu-otcovi',
        permanent: true,
        locale: false,
      },
      {
        source: '/sk/exhibition/detail/316',
        destination: '/detail/jozef-kostka',
        permanent: true,
        locale: false,
      },
      {
        source: '/sk/exhibition/detail/335',
        destination: '/detail/graficke-kabinety',
        permanent: true,
        locale: false,
      },
      {
        source: '/sk/exhibition/detail/479',
        destination: '/detail/edmund-gwerk',
        permanent: true,
        locale: false,
      },
      {
        source: '/sk/exhibition/detail/482',
        destination: '/detail/vystavny-plan',
        permanent: true,
        locale: false,
      },
      {
        source: '/sk/exhibition/detail/485',
        destination: '/navstivte',
        permanent: true,
        locale: false,
      },
      {
        source: '/sk/exhibition/detail/487',
        destination: '/detail/zdielana-predstava',
        permanent: true,
        locale: false,
      },
      {
        source: '/sk/exhibition/detail/489',
        destination: '/detail/vitalne-formy',
        permanent: true,
        locale: false,
      },
      {
        source: '/sk/exhibition/detail/495',
        destination: '/detail/action-everything',
        permanent: true,
        locale: false,
      },
      {
        source: '/sk/exhibition/detail/497',
        destination: '/detail/rezidencny-program',
        permanent: true,
        locale: false,
      },
      {
        source: '/sk/exhibition/detail/499',
        destination: '/detail/kde-su-zeny',
        permanent: true,
        locale: false,
      },
      {
        source: '/sk/exhibition/detail/503',
        destination: '/detail/peter-bartos',
        permanent: true,
        locale: false,
      },
      {
        source: '/sk/exhibition/detail/505',
        destination: '/detail/latentne-revolucie',
        permanent: true,
        locale: false,
      },
      {
        source: '/sk/exhibition/detail/74',
        destination: '/detail/avers-revers-alebo-nic-nie-je-take-ako-sa-zda',
        permanent: true,
        locale: false,
      },
      {
        source: '/sk/exhibition/detail/86',
        destination: '/detail/scherzovci',
        permanent: true,
        locale: false,
      },
      {
        source: '/sk/content/s-kocikom-do-galerie',
        destination: '/detail/rodiny',
        permanent: true,
        locale: false,
      },
      {
        source: '/sk/content/pedagogovia',
        destination: '/detail/vzdelavanie',
        permanent: true,
        locale: false,
      },
      {
        source: '/sk/content/kniznica',
        destination: '/detail/kniznica',
        permanent: true,
        locale: false,
      },
      {
        source: '/sk/content/fotografovanie-a-filmovanie-zbierkovych-predmetov',
        destination: '/detail/prenajom-priestorov',
        permanent: true,
        locale: false,
      },
      {
        source: '/sk/content/detski-sprievodcovia',
        destination: '/detail/vzdelavanie',
        permanent: true,
        locale: false,
      },
      {
        source: '/en/content/programs-for-schools',
        destination: '/en/detail/schools',
        permanent: true,
        locale: false,
      },
      {
        source: '/en/content/informations-for-visitors',
        destination: '/en/visit-us',
        permanent: true,
        locale: false,
      },
      {
        source: '/en/content/address-book',
        destination: '/en/detail/organizational-structure-of-gmb',
        permanent: true,
        locale: false,
      },
      {
        source: '/en/content/links',
        destination: '/en',
        permanent: true,
        locale: false,
      },
      {
        source: '/en/exhibition/detail/action-everything',
        destination: '/en/detail/action-everything-en',
        permanent: true,
        locale: false,
      },
      {
        source: '/en/exhibition/detail/miroslav-cipar',
        destination: '/en/detail/miroslav-cipar-en',
        permanent: true,
        locale: false,
      },
      {
        source: '/en/exhibition/detail/zdielana-predstava',
        destination: '/en/detail/zdielana-predstava-en',
        permanent: true,
        locale: false,
      },
      {
        source: '/en/exhibition/detail/vianoce-josefa-ladu-pocta-geniovi',
        destination: '/en/detail/vianoce-josefa-ladu-pocta-geniovi-en',
        permanent: true,
        locale: false,
      },
      {
        source: '/en/exhibition/detail/vladimir-kompanek',
        destination: '/en/detail/vladimir-kompanek-en',
        permanent: true,
        locale: false,
      },
      {
        source: '/en/exhibition/detail/peter-bartos',
        destination: '/en/detail/peter-bartos-en',
        permanent: true,
        locale: false,
      },
      {
        source: '/content/stipendium-pre-mladych-kuratorov',
        destination: '/detail/stipendium-radislava-matustika',
        permanent: true,
      },
      // Path matching, local non-specific
      {
        source: '/content/:slug',
        destination: '/detail/:slug',
        permanent: true,
      },
      {
        source: '/exhibition/detail/:slug',
        destination: '/detail/:slug',
        permanent: true,
      },
      {
        source: '/month/:slug*',
        destination: '/',
        permanent: true,
      },
      {
        source: '/news/:slug*',
        destination: '/',
        permanent: true,
      },
      // Path matching, local specific
      {
        source: '/sk/exhibition/list/:slug*',
        destination: '/vystavy',
        permanent: true,
        locale: false,
      },
      {
        source: '/en/exhibition/list/:slug*',
        destination: '/en/exhibitions',
        permanent: true,
        locale: false,
      },
      {
        source: '/sk/publications/:slug*',
        destination: '/detail/edicna-cinnost-galerie',
        permanent: true,
        locale: false,
      },
      {
        source: '/en/publications/:slug*',
        destination: '/en/detail/art-loves-paper',
        permanent: true,
        locale: false,
      },
    ]
  },
  // Docs: https://react-svgr.com/docs/next/
  webpack(config) {
    // Grab the existing rule that handles SVG imports
    const fileLoaderRule = config.module.rules.find((rule) => rule.test?.test?.('.svg'))

    config.module.rules.push(
      // Reapply the existing rule, but only for svg imports ending in ?url
      {
        ...fileLoaderRule,
        test: /\.svg$/i,
        resourceQuery: /url/, // *.svg?url
      },
      // Convert all other *.svg imports to React components
      {
        test: /\.svg$/i,
        issuer: fileLoaderRule.issuer,
        resourceQuery: { not: [...fileLoaderRule.resourceQuery.not, /url/] }, // exclude if *.svg?url
        use: {
          loader: '@svgr/webpack',
          options: { svgoConfig },
        },
      }
    )

    // Modify the file loader rule to ignore *.svg, since we have it handled now.
    fileLoaderRule.exclude = /\.svg$/i

    return config
  },
}

module.exports = nextConfig
