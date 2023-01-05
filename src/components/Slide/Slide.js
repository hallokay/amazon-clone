import React from 'react'
import {Swiper, SwiperSlide} from 'swiper/react';
import {Pagination, Navigation} from 'swiper';

// import swiper css
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './slide.css'

import { SliderProducts } from '../../data/products'


const slide = () => {
  return (
    <div className="s-container">
        <Swiper
        breakpoints={{
          640: {
            slidesPerView: 3
          },
          0: {
            slidesPerView: 2
          }
        }}
        modules={[Pagination, Navigation]}
        className="mySwiper"
        navigation={true}
        loopFillGroupWithBlank={true}
          slidesPerView={3}
          spaceBetween={40}
          slidesPerGroup={1}
          loop={true}>
            
            {SliderProducts.map((product , i) => (
                <SwiperSlide key={i}>
                    <div className="left-s" >
                        <div className="name">
                            <span>{product.name}</span>
                            <span>{product.detail}</span>
                        </div>
                        <span>{product.price}$</span>
                        <div>Shop now</div>

                    </div>

                    <img className="img-p" src={product.img} alt={product.name} />
                </SwiperSlide>

            ))} 
        </Swiper>
    </div>
  )
}

export default slide