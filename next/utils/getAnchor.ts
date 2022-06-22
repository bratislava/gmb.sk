import slugify from 'slugify'

import { isDefined } from './isDefined'

export const getAnchor = (text: string | null | undefined): string | undefined => {
  if (isDefined(text)) {
    return slugify(text)
  } 
    return undefined
  
}
