import { ContentPageEntityFragment, MainPageEntityFragment } from '@/src/services/graphql'
import { getKeyByValue } from '@/src/utils/getKeyByValue'
import { isDefined } from '@/src/utils/isDefined'

const routesSkToEn = {
  // Routes
  '/': '/',
  '/detail': '/detail',
  '/vstupenky': '/tickets',
  '/detail/ochrana-osobnych-udajov': '/detail/privacy-policy',
  // Tags
  vystavy: 'exhibitions',
  'stale-expozicie': 'permanent-exhibitions',
  aktuality: 'news',
  // TagCategories
  'program-typy': 'programme-types',
  'program-cielove-skupiny': 'programme-target-groups',
  'program-jazyky': 'programme-languages',
  'program-projekty': 'programme-projects',
  'program-ostatne': 'programme-others',
  'objavujte-typy': 'explore-types',
  'objavujte-projekty': 'explore-projects',
  'objavujte-ostatne': 'explore-others',
  // Places
  'mirbachov-palac': 'mirbach-palace',
  'palffyho-palac': 'palffy-palace',
}

type Route = keyof typeof routesSkToEn

export function isOfTypeRoute(keyInput: string): keyInput is Route {
  return Object.keys(routesSkToEn).includes(keyInput)
}

/** For a given slovak route, will return equivalent route in the current locale. */
export function getRouteForLocale(route: Route, locale: string) {
  if (locale === 'en') {
    return routesSkToEn[route]
  }

  return route
}

function isRoute(maybeRoute: string): maybeRoute is Route {
  return maybeRoute in routesSkToEn
}

/** For a given route (slovak or english), will return equivalent route in the target locale */
export function getRouteForTargetLocale(route: string, targetLocale: string) {
  if (!isRoute(route)) {
    return getKeyByValue(routesSkToEn, route)
  }
  if (targetLocale === 'en') {
    return routesSkToEn[route]
  }

  return route
}

function getContentPageDetailRouteForTargetLocale(
  contentPageLocalizations: ContentPageEntityFragment['localizations'],
  targetLocale: string,
) {
  const contentPageInTargetLocale = contentPageLocalizations
    .filter(isDefined)
    .find((localization) => localization.locale === targetLocale)

  if (!contentPageInTargetLocale) {
    return
  }

  // eslint-disable-next-line consistent-return
  return `/detail/${contentPageInTargetLocale?.slug}`
}

function getContentPageTicketsRouteForTargetLocale(
  contentPageLocalizations: ContentPageEntityFragment['localizations'],
  targetLocale: string,
) {
  const contentPageInTargetLocale = contentPageLocalizations
    .filter(isDefined)
    .find((localization) => localization.locale === targetLocale)

  if (!contentPageInTargetLocale) {
    return
  }

  const ticketsRoute = getRouteForLocale('/vstupenky', targetLocale)

  // eslint-disable-next-line consistent-return
  return `${ticketsRoute}/${contentPageInTargetLocale?.slug}`
}

const getMainPageRouteForTargetLocale = (
  mainPageLocalizations: MainPageEntityFragment['localizations'],
  targetLocale: string,
) => {
  const mainPageInTargetLocale = mainPageLocalizations
    .filter(isDefined)
    .find((localization) => localization.locale === targetLocale)

  if (!mainPageInTargetLocale) return

  // Always ensure slug has a leading slash to prevent issues with routing
  const slug = mainPageInTargetLocale?.slug

  // eslint-disable-next-line consistent-return
  return slug?.startsWith('/') ? slug : `/${slug}`
}

type Page = ContentPageEntityFragment | MainPageEntityFragment | undefined

const isMainPage = (page: Page): page is MainPageEntityFragment => {
  return isDefined(page) && page.__typename === 'MainPage'
}

export function getEquivalentRouteInTargetLocale(
  path: string, // Expects full path from Next router
  targetLocale: string,
  page: Page,
) {
  if (isMainPage(page)) {
    return getMainPageRouteForTargetLocale(page.localizations, targetLocale)
  }

  const isDetailRoute = path.startsWith('/detail') && isDefined(page)

  if (isDetailRoute) {
    return getContentPageDetailRouteForTargetLocale(page.localizations, targetLocale)
  }

  const isTicketsRoute =
    (path.startsWith('/tickets') || path.startsWith('/vstupenky')) && isDefined(page)

  if (isTicketsRoute) {
    return getContentPageTicketsRouteForTargetLocale(page.localizations, targetLocale)
  }

  return getRouteForTargetLocale(path, targetLocale)
}
