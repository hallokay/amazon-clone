import React from 'react'
import css from './Hero.module.css';
import { RiShoppingBagFill } from 'react-icons/ri'
import { BsArrowRight } from 'react-icons/bs'

import HeroImg from '../../assets/hero.png';

// 모션
import { motion } from "framer-motion";

const Hero = () => {

  const transition = {duration: 3, type: 'spring'};

  return (
    <div className={css.container}>
        {/* left side */}
        <div className={css.h_sides}>
          <span className={css.text1}>skin protection cream</span>

          <div className={css.text2}>
            <span>Trendy Collection</span>
            <span>Lorem ipsum dolor, sit amet consectetur adipisicing elit. ipsa et explicabo delectus!</span>
          </div>

        </div>

        {/* middle -- hero image  */}
        <div className={css.wrapper}>
          {/* blueCircle */}
          <motion.div
          initial={{bottom: '2rem'}}
          whileInView={{bottom: '0rem'}}
          transition={transition}
          className={css.blueCircle}></motion.div>

          <motion.img 
          initial={{bottom: '-2rem'}}
          whileInView={{bottom: '0rem'}}
          transition={transition}
          src={HeroImg} alt="main IMG" width={600} />

          <motion.div 
          initial={{right: '4%'}}
          whileInView={{right: '2%'}}
          transition={transition}
          className={css.cart2}>
            <RiShoppingBagFill/>

            <div className={css.signup}>
              <span>Best Signup Offers</span>

              <div>
                <BsArrowRight/>
              </div>
            </div>
          </motion.div>
        </div>

        {/* right side */}
        <div className={css.h_sides}>
          <div className={css.traffic}>
            <span>1.5km</span>
            <span>Monthly Traffic</span>
          </div>

          <div className={css.customers}>
            <span>100k</span>
            <span>Happy Customers</span>
          </div>
        </div>


    </div>
  )
}

export default Hero