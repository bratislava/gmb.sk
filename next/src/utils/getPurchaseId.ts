import { ContentPageEntityFragment } from '@/src/services/graphql'

type GetPurchaseId = Pick<ContentPageEntityFragment, 'sellTickets' | 'purchaseId' | 'place'>

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

export function getPurchaseId(contentPage: GetPurchaseId) {
  const { sellTickets, purchaseId, place } = contentPage
  const { purchaseId: placePurchaseId } = place ?? {}

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
