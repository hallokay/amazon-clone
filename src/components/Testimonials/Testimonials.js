import React from 'react';
import css from './Testimonials.module.css';
import Hero from '../../assets/testimonialHero.png';

// 캐러셀
import {Swiper, SwiperSlide} from 'swiper/react';

//데이터 
import { TestimonialsData } from '../../data/testimonials'


const Testimonials = () => {
  return (
    <div className={css.testimonials}>
        <div className={css.wrapper}>
            <div className={css.container}>
                <span>
                    Top Rated     
                </span>
                <span>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </span>
            </div>

            <img src={Hero} alt="hero" />

            <div className={css.container}>
                <span>100K</span>
                <span>Happy Customer with us.</span>
            </div>
        </div>

        <h2 className={css.review}>review</h2>
        <div className={css.carousal}>
            <Swiper
            slidesPerView={3}
            slidesPerGroup={1}
            spaceBetween={32}
            breakpoints={{
                856: {
                    slidesPerView: 3,
                },
                640: {
                    slidesPerView: 2
                },
                0: {
                    slidesPerView: 1
                    
                }
            }}
            className={css.tCarousal}
            >
                {TestimonialsData.map((data, i)=> (
                    <SwiperSlide>
                        <div className={css.testimonial}>
                            <img src={data.image} alt="img" />
                            <span>{data.comment}</span>
                            <hr />
                            <span>{data.name}</span>

                        </div>
                    </SwiperSlide>
                ))
 
                }
            </Swiper>
        </div>

    </div>
  )
}

export default Testimonials