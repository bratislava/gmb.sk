import { ContentPageEntityFragment } from '@/src/services/graphql'
import { WithAttributes } from '@/src/utils/isDefined'

const parsePurchaseId = (purchaseId: string) => {
  let pId = purchaseId
  if (purchaseId.startsWith('/')) {
    pId = purchaseId.slice(1)
  }
  if (pId.startsWith('listky/')) {
    return pId.slice(7)
  }
  // eslint-disable-next-line no-console
  console.log('Invalid purchaseId', purchaseId)

  return null
}

export function getPurchaseId(contentPage: WithAttributes<ContentPageEntityFragment>) {
  const { sellTickets, purchaseId, place } = contentPage.attributes
  const { purchaseId: placePurchaseId } = place?.data?.attributes ?? {}

  if (sellTickets) {
    if (purchaseId) {
      return parsePurchaseId(purchaseId)
    }
    if (placePurchaseId) {
      return parsePurchaseId(placePurchaseId)
    }
  }

  return null
}
