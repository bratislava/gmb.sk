import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

import cx from 'classnames'
import Image from 'next/image'
import { useRef } from 'react'
import { Autoplay, Navigation, Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import { NavigationOptions } from 'swiper/types'

import { ImageEntityFragment } from '../../graphql'
import { WithAttributes } from '../../utils/isDefined'

interface ImgSwiperProps {
  slides?: WithAttributes<ImageEntityFragment>[]
  anchor?: string
}

const ImgSwiper = ({ slides, anchor }: ImgSwiperProps) => {
  const navigationPrevRef = useRef(null)
  const navigationNextRef = useRef(null)
  const navigationStyle =
    'absolute cursor-pointer top-1/2 z-10 text-gmbDark font-[swiper-icons] text-[32px] font-heavy -mt-4 select-none'

  return slides ? (
    <Swiper
      loop
      speed={600}
      autoplay={{ delay: 3000, disableOnInteraction: true }}
      navigation={{
        prevEl: navigationPrevRef.current,
        nextEl: navigationNextRef.current,
      }}
      onBeforeInit={(swiper) => {
        if (swiper?.params?.navigation) {
          // eslint-disable-next-line no-param-reassign
          ;(swiper.params.navigation as NavigationOptions).prevEl = navigationPrevRef.current
          // eslint-disable-next-line no-param-reassign
          ;(swiper.params.navigation as NavigationOptions).nextEl = navigationNextRef.current
        }
      }}
      pagination={{
        el: '.swiper-pagination',
        clickable: true,
        bulletClass:
          'bg-none border-solid border-gmbDark border xl:border-2 w-3 xl:w-4 xxl:w-5 h-3 xl:h-4 xxl:h-5 inline-block rounded-full m-2.5 cursor-pointer shadow shadow-gmbGray',
        bulletActiveClass: 'bg-gmbDark',
      }}
      modules={[Navigation, Autoplay, Pagination]}
      className="w-full dh-[600]"
      id={anchor}
    >
      {slides?.map((item, index) => (
        // eslint-disable-next-line react/no-array-index-key
        <SwiperSlide key={index}>
          <Image
            src={item.attributes.url}
            layout="fill"
            objectFit="cover"
            alt={item.attributes.alternativeText ?? ''}
            unoptimized
          />
        </SwiperSlide>
      ))}
      <div ref={navigationPrevRef} className={cx(navigationStyle, 'left-11')}>
        prev
      </div>
      <div ref={navigationNextRef} className={cx(navigationStyle, 'right-11')}>
        next
      </div>
      {/* eslint-disable-next-line tailwindcss/no-custom-classname */}
      <div className="swiper-pagination absolute !bottom-12 z-10" />
    </Swiper>
  ) : null
}

export default ImgSwiper
