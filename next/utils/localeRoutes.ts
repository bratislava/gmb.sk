import { ContentPageFragment } from '@bratislava/strapi-sdk-city-gallery';
import { getKeyByValue } from './getKeyByValue';
import { isDefined } from './isDefined';

const routesSkToEn = {
  // Routes
  '/navstivte': '/visit-us',
  '/vystavy': '/exhibitions',
  '/o-galerii': '/about-gallery',
  '/objavujte': '/explore',
  '/zapoj-sa': '/get-involved',
  '/zbierky': '/collections',
  '/detail': '/detail',
  '/vstupenky': '/tickets',
  '/zverejnovanie-informacii': '/disclosure-of-information',
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
  'mirbachov-palac': 'mirbach-s-palace',
  'palffyho-palac': 'palffy-s-palace',
};

type Route = keyof typeof routesSkToEn;

/** For a given slovak route, will return equivalent route in the current locale. */
export function getRouteForLocale(route: Route, locale: string) {
  if (locale === 'en') {
    return routesSkToEn[route];
  }

  return route;
}
/** For a given route (slovak or english), will return equivalent route in the target locale */
export function getRouteForTargetLocale(route: string, targetLocale: string) {
  if (targetLocale === 'en' && isRoute(route)) {
    return routesSkToEn[route];
  }

  /** Retrieves slovak route based on english route */
  return getKeyByValue(routesSkToEn, route);
}

function isRoute(maybeRoute: string): maybeRoute is Route {
  return maybeRoute in routesSkToEn;
}

function getContentPageDetailRouteForTargetLocale(
  contentPageLocalizations: ContentPageFragment['localizations'],
  targetLocale: string
) {
  const contentPageInTargetLocale = contentPageLocalizations
    ?.filter(isDefined)
    .find((localization) => localization.locale === targetLocale);

  return `/detail/${contentPageInTargetLocale?.slug}`;
}

function getContentPageTicketsRouteForTargetLocale(
  contentPageLocalizations: ContentPageFragment['localizations'],
  targetLocale: string
) {
  const contentPageInTargetLocale = contentPageLocalizations
    ?.filter(isDefined)
    .find((localization) => localization.locale === targetLocale);

  const ticketsRoute = getRouteForLocale('/vstupenky', targetLocale);

  return `${ticketsRoute}/${contentPageInTargetLocale?.slug}`;
}

export function getEquivalentRouteInTargetLocale(
  pathname: string,
  targetLocale: string,
  contentPage: ContentPageFragment | undefined
) {
  const isDetailRoute =
    pathname.startsWith('/detail') && isDefined(contentPage);

  if (isDetailRoute) {
    return getContentPageDetailRouteForTargetLocale(
      contentPage.localizations,
      targetLocale
    );
  }

  const isTicketsRoute =
    (pathname.startsWith('/tickets') || pathname.startsWith('/vstupenky')) &&
    isDefined(contentPage);

  if (isTicketsRoute) {
    return getContentPageTicketsRouteForTargetLocale(
      contentPage.localizations,
      targetLocale
    );
  }

  return getRouteForTargetLocale(pathname, targetLocale);
}
