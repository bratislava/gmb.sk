import { ContentPageEntityFragment } from '@/graphql'

// TODO use css var for #efefef color
export const getContentPageColor = (contentPage: ContentPageEntityFragment) =>
  contentPage?.attributes?.inheritColorFromParent &&
  contentPage.attributes.parentPage?.data?.attributes?.color
    ? contentPage.attributes.parentPage?.data?.attributes?.color
    : contentPage.attributes?.color ?? '#efefef'
