import React from 'react'
import css from './Footer.module.css';
import Logo from '../../assets/logo.png';
import {
  InboxOutline,
  PhoneOutline,
  LocationMarkerOutline,
  LoginOutline,
  UsersOutline,
  LinkOutline,
} from "heroicons-react";

const Footer = () => {
  return (
    <div className={css.cFooterWrapper}>
      <hr/>

      <div className={css.cFooter}>
        <div className={css.logo}>
          <img src={Logo} alt="logo" />
          <span>amazon</span>
        </div>
        {/* logo */}

        <div className={css.block}>
          <div className={css.detail}>
            <span>Contact US</span>
            <span className={css.pngLine}>
              <LocationMarkerOutline className={css.icon}/>
              <span>서울 창업허브, 마포구 공덕동, 서울 특별시</span>
            </span>

            <span className={css.pngLine}>
              <PhoneOutline className={css.icon}/>
              <a href="tel: 02-225-4452">225-4452</a>
           </span>

           <span className={css.pngLine}>
              <InboxOutline className={css.icon}/>
              <a href="tel: 02-225-4452">support@market.com</a>
           </span>

          </div>
        </div>

        <div className={css.block}>
          <div className={css.detail}>
            <span>Account</span>
            <span className={css.pngLine}>
              <LoginOutline className={css.icon}/>
              <a href="">Log-In</a>
            </span>
          </div>
        </div>

        <div className={css.block}>
          <div className={css.detail}>
            <span>Company</span>
            <span className={css.pngLine}>
              <UsersOutline className={css.icon}/>
              <a href="/about">
                <p>About us</p>
              </a>
            </span>
            
          </div>
        </div>

        <div className={css.block}>
          <div className={css.detail}>
            <span>Resources</span>
            <span className={css.pngLine}>
              <LinkOutline className={css.icon}/>
              <span>safty privacy & Teres</span>
            </span>
            
          </div>
        </div>

      </div>
        {/* 카피라이트 */}
        <div className={css.copyRight}>
          <span>Copyright 2002 by Amazon, Inc.</span>
          <span>All right reserved.</span>
        </div>
    </div>
  )
}

export default Footer