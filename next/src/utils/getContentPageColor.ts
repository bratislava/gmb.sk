import { ContentPageEntityFragment } from '@/src/services/graphql' // TODO use css var for #efefef color

// TODO use css var for #efefef color

type GetContentPageColor = Pick<
  ContentPageEntityFragment,
  'color' | 'inheritColorFromParent' | 'parentPage'
>

export const getContentPageColor = (contentPage: GetContentPageColor) =>
  contentPage.inheritColorFromParent && contentPage.parentPage?.color
    ? contentPage.parentPage.color
    : (contentPage.color ?? '#efefef')
