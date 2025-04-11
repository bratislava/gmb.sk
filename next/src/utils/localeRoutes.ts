import { ContentPageEntityFragment, MainPageEntityFragment } from '@/src/services/graphql'
import { getKeyByValue } from '@/src/utils/getKeyByValue'
import { hasAttributes, isDefined, WithAttributes } from '@/src/utils/isDefined'

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
  contentPageLocalizations: WithAttributes<ContentPageEntityFragment>['attributes']['localizations'],
  targetLocale: string
) {
  const contentPageInTargetLocale = contentPageLocalizations?.data
    ?.filter(hasAttributes)
    .find((localization) => localization.attributes.locale === targetLocale)

  if (!contentPageInTargetLocale) {
    return
  }

  // eslint-disable-next-line consistent-return
  return `/detail/${contentPageInTargetLocale?.attributes.slug}`
}

function getContentPageTicketsRouteForTargetLocale(
  contentPageLocalizations: WithAttributes<ContentPageEntityFragment>['attributes']['localizations'],
  targetLocale: string
) {
  const contentPageInTargetLocale = contentPageLocalizations?.data
    ?.filter(hasAttributes)
    .find((localization) => localization.attributes.locale === targetLocale)

  if (!contentPageInTargetLocale) {
    return
  }

  const ticketsRoute = getRouteForLocale('/vstupenky', targetLocale)

  // eslint-disable-next-line consistent-return
  return `${ticketsRoute}/${contentPageInTargetLocale?.attributes.slug}`
}

const getMainPageRouteForTargetLocale = (
  mainPageLocalizations: WithAttributes<MainPageEntityFragment>['attributes']['localizations'],
  targetLocale: string
) => {
  const mainPageInTargetLocale = mainPageLocalizations?.data
    ?.filter(hasAttributes)
    .find((localization) => localization.attributes.locale === targetLocale)

  if (!mainPageInTargetLocale) return

  // Always ensure slug has a leading slash to prevent issues with routing
  const slug = mainPageInTargetLocale?.attributes.slug

  // eslint-disable-next-line consistent-return
  return slug?.startsWith('/') ? slug : `/${slug}`
}

type Page =
  | WithAttributes<ContentPageEntityFragment>
  | WithAttributes<MainPageEntityFragment>
  | undefined

const isMainPage = (page: Page): page is WithAttributes<MainPageEntityFragment> => {
  return isDefined(page) && page.__typename === 'MainPageEntity'
}

export function getEquivalentRouteInTargetLocale(
  path: string, // Expects full path from Next router
  targetLocale: string,
  page: Page
) {
  if (isMainPage(page)) {
    return getMainPageRouteForTargetLocale(page.attributes.localizations, targetLocale)
  }

  const isDetailRoute = path.startsWith('/detail') && isDefined(page)

  if (isDetailRoute) {
    return getContentPageDetailRouteForTargetLocale(page.attributes.localizations, targetLocale)
  }

  const isTicketsRoute =
    (path.startsWith('/tickets') || path.startsWith('/vstupenky')) && isDefined(page)

  if (isTicketsRoute) {
    return getContentPageTicketsRouteForTargetLocale(page.attributes.localizations, targetLocale)
  }

  return getRouteForTargetLocale(path, targetLocale)
}
