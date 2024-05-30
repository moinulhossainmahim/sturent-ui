import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, EffectFade } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import { sliderData } from './slider-data';

const Slider = () => {
  return (
    <div className='relative'>
      <Swiper
        className='cursor-grab px-10%'
        spaceBetween={50}
        slidesPerView={1}
        effect={'fade'}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
        loop
        pagination={{ clickable: true, el: '.home-slider-pagination' }}
        modules={[Pagination, EffectFade]}
      >
        {sliderData.map((slider) => (
          <SwiperSlide key={slider.id}>
            <div className='slider-bg'>
              <img src={slider.img} alt="bg" className='' />
            </div>
            <div className='slider-inner'>
              <div className='slider-detail'>
                <h2 className='title'>{slider.title}</h2>
                <p className='description'>{slider.description}</p>
              </div>
              <div className='slider-trailer'>
                <div>
                  <Image
                    height={500}
                    width={800}
                    src={slider.img}
                    alt='image'
                  />
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className='home-slider-pagination'>
      </div>
    </div>
  )
}

export default Slider;
