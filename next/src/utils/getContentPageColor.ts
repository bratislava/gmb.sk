import { ContentPageEntityFragment } from '@/src/services/graphql' // TODO use css var for #efefef color

// TODO use css var for #efefef color
export const getContentPageColor = (contentPage: ContentPageEntityFragment) =>
  contentPage?.inheritColorFromParent && contentPage.parentPage?.color
    ? contentPage.parentPage?.color
    : (contentPage.color ?? '#efefef')
