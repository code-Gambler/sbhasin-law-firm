import React from 'react';
import { testimonials } from '../data';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import '../testimonialSlider.css';

// import Swiper core and required modules
import { Autoplay, Pagination } from 'swiper';

const TestimonialSlider = () => {
  return (
    <>
    <Swiper pagination={{dynamicBullets: true, clickable: true }} autoplay={{delay: 4000, disableOnInteraction:false}} modules={[Autoplay, Pagination]} className='mySwiper'>
      {testimonials.map((item, index) => {
        const { text, name} = item;
        return (
        <SwiperSlide key={index}>
          <div className='relative lg:mt-[34px] before:content-quote p-8'>
            <div>
              <p>{text}</p>
              <div className='flex items-center mt-[18px] mb9'>
                <div className='ml-4'>
                  <h6 className='font-bold'>{name}</h6>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>);
      }
      )}
    </Swiper>
    </>
  );
}

export default TestimonialSlider