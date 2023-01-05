import {useState, useEffect, useRef} from 'react'
import css from './Products.module.css';
import plane from '../../assets/plane.png';
import autoAnimate from '@formkit/auto-animate'

//데이터 
import { ProductsData } from '../../data/products'


const Products = () => {
   
 const [MenuProducts, setMenuProducts] = useState(ProductsData);
 const parent = useRef(null);

//  탭으로 거르기!
 const filter = (type) => {
  setMenuProducts(ProductsData.filter(val => val.type === type))
};


useEffect(() => {
  parent.current && autoAnimate(parent.current)
}, [parent])
  return (
    <div className={css.container}>
      {/*  제목 */} 
      <div className={css.title}>
        <img src={plane} alt="" />
        <h1>Our Featured Products</h1>
      </div>

        <div className={css.products}>
          <ul className={css.menu}>
            <li onClick={() => setMenuProducts(ProductsData)}>all</li>
            <li onClick={() => filter('skin care')}>skin care</li>
            <li onClick={() => filter('conditioner')} >conditioners</li>
            <li onClick={() => filter('foundation')} >Foundations</li>
          </ul>

          <div className={css.list} ref={parent}>
          { MenuProducts.map( (product, i ) => (
            <div className={css.product} key={i}>
              <div className="left-s">
                <div className="name">
                  <span>{product.name}</span> 
                  <span>{product.detail}</span>
                </div>
                <span>{product.price}$</span>
                <div>show now</div>
              </div>
              {/* //left-s */}

              <img src={product.img} className="img-p" alt={product.name} />

            </div>
          ))}

          </div>
          {/* list */}
        </div>
        {/* products */}

    
    </div>
  )
}

export default Products