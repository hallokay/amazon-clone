import { useState } from 'react'
import css from './Header.module.css';
import logo from '../../assets/logo.png';
import { CgShoppingBag } from 'react-icons/cg';
import { GoThreeBars } from 'react-icons/go';

 

const Header = () => {
  // 테블릿일때 메뉴 보여주기
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu((showMenu) => !showMenu)
    // console.log(showMenu);
  }

  return (
    <nav>
        <div className={css.container}>
        <div className={css.logo}>
            <img src={logo} alt="logo" />
            <span>amazon</span>
        </div>

        <div className={css.right}>

          {/* 태블릿일때 */}
          <div className={css.bars} onClick={toggleMenu}>
            <GoThreeBars />
          </div>

           
              <ul className={css.menu}
              style={{display: showMenu ? 'inherit' : 'none'}}
              
              >
                <li>collections</li>
                <li>Brands</li>
                <li>New</li>
                <li>Sales</li>
                <li>ENG</li>
              </ul>
        
            {/* <div> */}
            <input type="text" className={css.search} placeholder="Search" />
            <CgShoppingBag className={css.cart} />
            {/* </div> */}
        </div>
    </div>

    </nav>
  
  )
}

export default Header