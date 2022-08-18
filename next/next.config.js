// eslint-disable-next-line @typescript-eslint/no-var-requires
const { i18n } = require('./next-i18next.config')

/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  i18n,
  images: {
    domains: ['localhost', 'cdn-api.bratislava.sk'],
  },
  reactStrictMode: true,
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
         * Rewrites to make the the translation of URL work. Based on an approached outlined here:
         * https://stackoverflow.com/questions/68723485/how-to-setup-i18n-translated-url-routes-in-next-js/68731057#68731057
         */
        {
          source: '/visit-us',
          destination: '/navstivte',
        },
        {
          source: '/exhibitions',
          destination: '/vystavy',
        },
        {
          source: '/about-gallery',
          destination: '/o-galerii',
        },
        {
          source: '/explore',
          destination: '/objavujte',
        },
        {
          source: '/get-involved',
          destination: '/zapojte-sa',
        },
        {
          source: '/collections',
          destination: '/zbierky',
        },
        {
          source: '/tickets/:event',
          destination: '/vstupenky/:event',
        },
        {
          source: '/disclosure-of-information',
          destination: '/zverejnovanie-informacii',
        },
      ],
    }
  },
  async redirects() {
    return [
      {
        source: '/content/:slug',
        destination: '/detail/:slug',
        permanent: true,
      },
      {
        source: '/sk/content/:slug',
        destination: '/detail/:slug',
        permanent: true,
      },
      {
        source: '/en/content/:slug',
        destination: '/detail/:slug',
        permanent: true,
      },
      {
        source: '/exhibition/detail/:slug',
        destination: '/detail/:slug',
        permanent: true,
      },
      {
        source: '/sk/exhibition/detail/:slug',
        destination: '/detail/:slug',
        permanent: true,
      },
      {
        source: '/en/exhibition/detail/:slug',
        destination: '/detail/:slug',
        permanent: true,
      },
      {
        source: '/sk/exhibition/list/:slug*',
        destination: '/vystavy',
        permanent: true,
      },
      {
        source: '/en/exhibition/list/:slug*',
        destination: '/en/exhibitions',
        permanent: true,
      },
      {
        source: '/sk/news/:slug*',
        destination: '/',
        permanent: true,
      },
      {
        source: '/en/news/:slug*',
        destination: '/en',
        permanent: true,
      },
      {
        source: '/sk/publications/:slug*',
        destination: '/detail/edicna-cinnost-galerie',
        permanent: true,
      },
      {
        source: '/en/publications/:slug*',
        destination: '/en/detail/art-loves-paper',
        permanent: true,
      },
      {
        source: '/sk/month/:slug*',
        destination: '/',
        permanent: true,
      },
      {
        source: '/month/:slug*',
        destination: '/',
        permanent: true,
      },
      {
        source: '/en/month/:slug*',
        destination: '/en',
        permanent: true,
      },
      {
        source: '/sk/home',
        destination: '/',
        permanent: true,
      },
      {
        source: '/en/home',
        destination: '/en',
        permanent: true,
      },
      {
        source: '/content/mirbachov-palac',
        destination: '/detail/mirbachov-palac',
        permanent: true,
      },
      {
        source: '/content/palffyho-palac',
        destination: '/detail/palffyho-palac',
        permanent: true,
      },
      {
        source: '/sk/content/mirbachov-palac',
        destination: '/detail/mirbachov-palac',
        permanent: true,
      },
      {
        source: '/sk/content/palffyho-palac',
        destination: '/detail/palffyho-palac',
        permanent: true,
      },
      {
        source: '/en/content/mirbach-palace',
        destination: '/en/detail/mirbach-palace',
        permanent: true,
      },
      {
        source: '/en/content/palffy-palace',
        destination: '/en/detail/palffy-palace',
        permanent: true,
      },
      {
        source: '/en/content/mirbachov-palac',
        destination: '/en/detail/mirbach-palace',
        permanent: true,
      },
      {
        source: '/en/content/palffyho-palac',
        destination: '/en/detail/palffy-palace',
        permanent: true,
      },
      {
        source: '/sk/content/kde-nas-najdete',
        destination: '/navstivte',
        permanent: true,
      },
      {
        source: '/sk/search/results',
        destination: '/',
        permanent: true,
      },
      {
        source: '/en/search/results',
        destination: '/en',
        permanent: true,
      },
      {
        source: '/sk/content/cennik-sluzieb',
        destination: '/navstivte',
        permanent: true,
      },
      {
        source: '/sk/content/historia',
        destination: '/detail/historia-gmb',
        permanent: true,
      },
      {
        source: '/sk/content/historia-2',
        destination: '/detail/historia-gmb',
        permanent: true,
      },
      {
        source: '/sk/content/informacie-k-osobnym-udajom',
        destination: '/ochrana-osobnych-udajov',
        permanent: true,
      },
      {
        source: '/sk/content/podcasty-a-videa',
        destination: '/objavujte',
        permanent: true,
      },
      {
        source: '/sk/content/pracovne-pozicie',
        destination: '/detail/spolupracuj-s-gmb',
        permanent: true,
      },
      {
        source: '/sk/content/prenajmy',
        destination: '/detail/prenajom-priestorov',
        permanent: true,
      },
      {
        source: '/sk/content/vstupne',
        destination: '/navstivte',
        permanent: true,
      },
      {
        source: '/sk/content/zapozicavanie-zbierkovych-predmetov',
        destination: '/detail/vypozicky-zbierkovych-predmetov',
        permanent: true,
      },
      {
        source: '/sk/content/ziadost-o-vystavu-v-gmb',
        destination: '/detail/ziadost-o-vystavu',
        permanent: true,
      },
      {
        source: '/sk/content/zverejnovanie-informacii',
        destination: '/zverejnovanie-informacii',
        permanent: true,
      },
      {
        source: '/en/content/buildings',
        destination: '/en/about-gallery',
        permanent: true,
      },
      {
        source: '/sk/content/adresar-zamestnancov',
        destination: '/detail/organizacna-struktura-gmb',
        permanent: true,
      },
      {
        source: '/sk/content/poslanie',
        destination: 'detail/vizia-gmb',
        permanent: true,
      },
      {
        source: '/sk/content/sluzby',
        destination: '/navstivte',
        permanent: true,
      },
      {
        source: '/en/content/services',
        destination: '/en/visit-us',
        permanent: true,
      },
      {
        source: '/sk/content/verejnost',
        destination: '/vystavy',
        permanent: true,
      },
      {
        source: '/sk/exhibition/detail/pribehy-a-fenomeny-slovenske-vytvarne-umenie-20-storocia-ii',
        destination: '/detail/fenomeny-slovenske-vytvarne-umenie-druhej-polovice-20-storocia',
        permanent: true,
      },
      {
        source: '/sk/exhibition/detail/vystavny-plan-2021',
        destination: '/detail/vystavny-plan',
        permanent: true,
      },
      {
        source: '/sk/content/koncerty',
        destination: '/vystavy',
        permanent: true,
      },
      {
        source: '/sk/content/sprievodne-podujatia',
        destination: '/vystavy',
        permanent: true,
      },
      {
        source: '/sk/exhibition/detail/zivot-v-galeriie',
        destination: '/detail/scherzovci',
        permanent: true,
      },
      {
        source: '/sk/news/view/170',
        destination: '/detail/anton-jaszusch-maliar-a-vizionar',
        permanent: true,
      },
      {
        source: '/sk/exhibition/detail/zbierka-umenia-20-a-21-storocia',
        destination: '/detail/zbierka-1900-1960',
        permanent: true,
      },
      {
        source: '/sk/exhibition/detail/zbierka-starej-kresby-a-grafiky',
        destination: '/detail/kresba-grafika-do-1900',
        permanent: true,
      },
      {
        source: '/sk/exhibition/detail/zbierka-stareho-umenia',
        destination: '/detail/malba-socha-do-1900',
        permanent: true,
      },
      {
        source: '/sk/exhibition/detail/stredoeuropske-barokove-maliarstvo-a-socharstvo',
        destination: '/detail/stredoeuropske-barokove-maliarstvo-a-socharstvo',
        permanent: true,
      },
      {
        source: '/sk/exhibition/detail/spomienka-na-karola-barona',
        destination: '/detail/avers-revers-alebo-nic-nie-je-take-ako-sa-zda',
        permanent: true,
      },
      {
        source: '/sk/exhibition/detail/rezidencia-gmb',
        destination: '/detail/rezidencny-program',
        permanent: true,
      },
      {
        source: '/sk/exhibition/detail/prezentacia-vysledkov-restaurovania-diela-kralovna-anjelov',
        destination: '/detail/panna-maria-ako-kralovna-anjelov',
        permanent: true,
      },
      {
        source: '/sk/exhibition/detail/poldruha-storocia-maliarstvo-a-socharstvo-1800-1950',
        destination: '/detail/poldruha-storocia-maliarstvo-a-socharstvo-1800-1950',
        permanent: true,
      },
      {
        source: '/sk/exhibition/detail/keltska-mincovna-v-bratislave',
        destination: '/detail/biatec-keltska-mincovna',
        permanent: true,
      },
      {
        source: '/sk/exhibition/detail/graficke-kabinety-v-mirbachovom-palaci',
        destination: '/detail/graficke-kabinety',
        permanent: true,
      },
      {
        source: '/sk/exhibition/detail/goticka-malba-a-plastika',
        destination: '/detail/goticka-tabulova-malba-a-plastika',
        permanent: true,
      },
      {
        source: '/sk/exhibition/detail/anglicke-gobeliny',
        destination: '/detail/anglicke-tapiserie',
        permanent: true,
      },
      {
        source: '/sk/exhibition/detail/13',
        destination: '/detail/goticka-tabulova-malba-a-plastika',
        permanent: true,
      },
      {
        source: '/sk/exhibition/detail/131',
        destination: '/detail/martin-benka-1888-1971',
        permanent: true,
      },
      {
        source: '/sk/exhibition/detail/14',
        destination: '/detail/stredoeuropske-barokove-maliarstvo-a-socharstvo',
        permanent: true,
      },
      {
        source: '/sk/exhibition/detail/146',
        destination: '/detail/fenomeny-slovenske-vytvarne-umenie-druhej-polovice-20-storocia',
        permanent: true,
      },
      {
        source: '/sk/exhibition/detail/196',
        destination: '/detail/obrazaren',
        permanent: true,
      },
      {
        source: '/sk/exhibition/detail/219',
        destination: '/detail/milan-bockay',
        permanent: true,
      },
      {
        source: '/sk/exhibition/detail/290',
        destination: '/detail/katarina-vavrova-vyznanie-mojmu-otcovi',
        permanent: true,
      },
      {
        source: '/sk/exhibition/detail/316',
        destination: '/detail/jozef-kostka',
        permanent: true,
      },
      {
        source: '/sk/exhibition/detail/335',
        destination: '/detail/graficke-kabinety',
        permanent: true,
      },
      {
        source: '/sk/exhibition/detail/479',
        destination: '/detail/edmund-gwerk',
        permanent: true,
      },
      {
        source: '/sk/exhibition/detail/482',
        destination: '/detail/vystavny-plan',
        permanent: true,
      },
      {
        source: '/sk/exhibition/detail/485',
        destination: '/navstivte',
        permanent: true,
      },
      {
        source: '/sk/exhibition/detail/487',
        destination: '/detail/zdielana-predstava',
        permanent: true,
      },
      {
        source: '/sk/exhibition/detail/489',
        destination: '/detail/vitalne-formy',
        permanent: true,
      },
      {
        source: '/sk/exhibition/detail/495',
        destination: '/detail/action-everything',
        permanent: true,
      },
      {
        source: '/sk/exhibition/detail/497',
        destination: '/detail/rezidencny-program',
        permanent: true,
      },
      {
        source: '/sk/exhibition/detail/499',
        destination: '/detail/kde-su-zeny',
        permanent: true,
      },
      {
        source: '/sk/exhibition/detail/503',
        destination: '/detail/peter-bartos',
        permanent: true,
      },
      {
        source: '/sk/exhibition/detail/505',
        destination: '/detail/latentne-revolucie',
        permanent: true,
      },
      {
        source: '/sk/exhibition/detail/74',
        destination: '/detail/avers-revers-alebo-nic-nie-je-take-ako-sa-zda',
        permanent: true,
      },
      {
        source: '/sk/exhibition/detail/86',
        destination: '/detail/scherzovci',
        permanent: true,
      },
      {
        source: '/sk/content/s-kocikom-do-galerie',
        destination: '/detail/rodiny',
        permanent: true,
      },
      {
        source: '/sk/content/pedagogovia',
        destination: '/detail/vzdelavanie',
        permanent: true,
      },
      {
        source: '/sk/content/kniznica',
        destination: '/detail/kniznica',
        permanent: true,
      },
      {
        source: '/sk/content/fotografovanie-a-filmovanie-zbierkovych-predmetov',
        destination: '/detail/prenajom-priestorov',
        permanent: true,
      },
      {
        source: '/sk/content/detski-sprievodcovia',
        destination: '/detail/vzdelavanie',
        permanent: true,
      },
      {
        source: '/en/content/programs-for-schools',
        destination: '/en/detail/schools',
        permanent: true,
      },
      {
        source: '/en/content/informations-for-visitors',
        destination: '/en/visit-us',
        permanent: true,
      },
      {
        source: '/en/content/address-book',
        destination: '/en/detail/organizational-structure-of-gmb',
        permanent: true,
      },
      {
        source: '/content/stipendium-pre-mladych-kuratorov',
        destination: '/detail/stipendium-radislava-matustika',
        permanent: true,
      },
      {
        source: '/en/content/links',
        destination: '/en',
        permanent: true,
      },
    ]
  },
}

module.exports = (phase, { defaultConfig }) => {
  return {
    ...defaultConfig,
    ...nextConfig,
    webpack(config) {
      config.module.rules.push({
        test: /\.svg$/,
        use: ['@svgr/webpack'],
      })

      return config
    },
  }
}
