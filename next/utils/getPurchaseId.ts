import { ContentPageEntityFragment } from '../graphql/index'
import { WithAttributes } from './isDefined'

export function getPurchaseId(contentPage: WithAttributes<ContentPageEntityFragment>) {
  if (contentPage.attributes.sellTickets) {
    if (contentPage.attributes.purchaseId) {
      return contentPage.attributes.purchaseId
    }
    if (contentPage.attributes.place?.data?.attributes?.purchaseId) {
      return contentPage.attributes.place?.data?.attributes?.purchaseId
    }
  }
  return null
}
