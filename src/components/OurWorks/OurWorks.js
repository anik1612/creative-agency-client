import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Autoplay } from 'swiper';
import slider1 from '../../images/carousel-1.png'
import slider2 from '../../images/carousel-2.png'
import slider3 from '../../images/carousel-3.png'
import slider4 from '../../images/carousel-4.png'
import slider5 from '../../images/carousel-5.png'
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import './OurWorks.css'


SwiperCore.use([Navigation, Autoplay]);

const OurWorks = () => {
    return (
        <div className='mb-5 carousel-container'>
            <div>
            <h3 className='text-center text-white mb-5 pb-3 pt-5'>Here are some of <span style={{color: '#7AB259'}}> our works</span></h3>
            </div>
            <div className='carousel-slider'>
                <Swiper
                    spaceBetween={25}
                    slidesPerView={3}
                    navigation
                    autoplay={{
                        delay: 2100,
                        disableOnInteraction: false
                    }}
                    loop={true}
                >
                    <SwiperSlide><img style={{ height: '300px', width: '400px' }} className='img-fluid' src={slider1} alt="" /></SwiperSlide>
                    <SwiperSlide><img style={{ height: '300px', width: '400px' }} className='img-fluid' src={slider2} alt="" /></SwiperSlide>
                    <SwiperSlide><img style={{ height: '300px', width: '400px' }} className='img-fluid' src={slider3} alt="" /></SwiperSlide>
                    <SwiperSlide><img style={{ height: '300px', width: '400px' }} className='img-fluid' src={slider4} alt="" /></SwiperSlide>
                    <SwiperSlide><img style={{ height: '300px', width: '400px' }} className='img-fluid' src={slider5} alt="" /></SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
};

export default OurWorks;