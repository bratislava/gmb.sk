import 'pro-gallery/dist/statics/main.css'

import _ from 'lodash'
import { useTranslation } from 'next-i18next'
import {
  Container as ProGalleryContainer,
  EventsListener as ProGalleryEventsListener,
  GALLERY_CONSTS,
  Item as ProGalleryItem,
  ProGallery,
} from 'pro-gallery'
import { createRef, useEffect, useState } from 'react'
import Modal from 'react-modal'

import CloseButton from '../../assets/icons/close-x.svg'
import { ImageWithFormatsEntityFragment } from '../../graphql'
import { hasAttributes } from '../../utils/isDefined'

interface ImageGalleryProps {
  medias?: ImageWithFormatsEntityFragment[]
  className?: string
}

type Format = {
  ext: string
  hash: string
  height: number
  mime: string
  name: string
  path: string | null
  size: number
  url: string
  width: number
}

const ImageGallery = ({ medias, className }: ImageGalleryProps) => {
  // The scrollingElement is usually the window, if you are scrolling inside another element, suplly it here
  const scrollingElement = createRef<HTMLDivElement>()
  // The size of the gallery container. The images will fit themselves in it
  const [container, setContainer] = useState<ProGalleryContainer>({
    width: 0,
    height: undefined,
  })
  const [showModal, setShowModal] = useState(false)
  useEffect(() => {
    if (container.width !== scrollingElement.current?.offsetWidth && showModal) {
      setContainer({
        width: scrollingElement.current?.offsetWidth ?? -1,
        height: scrollingElement.current?.offsetHeight,
      })
      console.log({ container })
    }
  })
  const { t } = useTranslation()
  const closeModal = () => {
    setShowModal(false)
  }

  if (!medias) {
    return null
  }

  const items: ProGalleryItem[] = []
  medias?.filter(hasAttributes).forEach((media) => {
    const { alternativeText, height, width, url, formats, caption } = media.attributes
    const { thumbnail }: { thumbnail: Format } = formats
    const proGalleryItem: ProGalleryItem = {
      itemId: _.uniqueId('gallery-image'),
      mediaUrl: url,
      metaData: {
        type: 'image',
        height,
        width,
        alternativeText,
        title: caption,
        description: caption,
        focalPoint: [0, 0],
      },
    }
    items.push(proGalleryItem)
  })

  // The options of the gallery (from the playground current state)
  const options = {
    galleryLayout: 3,
    hoveringBehaviour: 'NEVER_SHOW',
    titlePlacement: 'SHOW_BELOW',
    cubeType: 'fit',
    allowTitle: true,
    galleryTextAlign: 'center',
  }

  GALLERY_CONSTS.placements.SHOW_BELOW

  // The eventsListener will notify you anytime something has happened in the gallery.
  const eventsListener: ProGalleryEventsListener = (eventName, eventData) => false

  return (
    <div className={className}>
      <Modal
        isOpen={showModal}
        onRequestClose={closeModal}
        ariaHideApp={false}
        className="relative h-full w-full"
        overlayClassName="bg-[rgba(0,0,0,0.9)] fixed inset-0 z-[51]"
      >
        <div className="relative top-yMd flex h-[calc(100vh-2*var(--padding-y-md))] flex-col text-white">
          <div className="mb-[10px] flex w-full flex-[0_0_auto] items-center justify-between border-b py-ySm px-xSm">
            <h1 className="text-lg">{t('cookieConsent.modalTitle')}</h1>
            <button type="button" onClick={closeModal}>
              <CloseButton className="dw-[25px]" fill="white" />
            </button>
          </div>
          <div className="min-h-0 flex-[1_1_auto]" ref={scrollingElement}>
            {container.height && (
              <ProGallery
                items={items}
                options={options}
                container={container}
                eventsListener={eventsListener}
                scrollingElement={scrollingElement.current}
              />
            )}
          </div>
        </div>
      </Modal>
      <div onClick={() => setShowModal(true)}>
        <img src={medias[0].attributes?.url} />
      </div>
    </div>
  )
}

export default ImageGallery
