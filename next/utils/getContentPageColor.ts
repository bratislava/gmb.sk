import { ContentPageFragment } from '@bratislava/strapi-sdk-city-gallery';

// TODO use css var for #efefef color
export const getContentPageColor = (contentPage: ContentPageFragment) =>
  contentPage?.inheritColorFromParent && contentPage.parentPage?.color
    ? contentPage.parentPage?.color
    : contentPage.color ?? '#efefef';
