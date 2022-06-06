import { SliderMediaFragment } from '@bratislava/strapi-sdk-city-gallery';
import cx from 'classnames';
import Image from 'next/image';
import React from 'react';
import { Autoplay, Navigation, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import { NavigationOptions } from 'swiper/types';

interface ImgSwiperProps {
  slides?: SliderMediaFragment[];
  anchor?: string;
}

const ImgSwiper = ({ slides, anchor }: ImgSwiperProps) => {
  const navigationPrevRef = React.useRef(null);
  const navigationNextRef = React.useRef(null);
  const navigationStyle =
    'absolute cursor-pointer top-1/2 z-10 text-gmbDark font-[swiper-icons] text-[32px] font-heavy -mt-4 select-none';

  return slides ? (
    <Swiper
      loop={true}
      speed={2000}
      autoplay={{ delay: 2500, disableOnInteraction: true }}
      navigation={{
        prevEl: navigationPrevRef.current,
        nextEl: navigationNextRef.current,
      }}
      onBeforeInit={(swiper) => {
        if (swiper?.params?.navigation) {
          (swiper.params.navigation as NavigationOptions).prevEl =
            navigationPrevRef.current;
          (swiper.params.navigation as NavigationOptions).nextEl =
            navigationNextRef.current;
        }
      }}
      pagination={{
        el: '.swiper-pagination',
        clickable: true,
        bulletClass:
          'bg-none border-solid border-gmbDark border-2 w-5 h-5 inline-block rounded-full mx-2.5 cursor-pointer',
        bulletActiveClass: 'bg-gmbDark',
      }}
      modules={[Navigation, Autoplay, Pagination]}
      className="w-full h-[300px] md:h-[450px] lg:h-[600px]"
      id={anchor}
    >
      {slides?.map((item) => (
        <SwiperSlide key={item.id}>
          <Image
            src={item.url}
            layout="fill"
            objectFit="cover"
            alt={item.alternativeText ?? ''}
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
      <div className="swiper-pagination absolute !bottom-12 z-10" />
    </Swiper>
  ) : null;
};

export default ImgSwiper;
