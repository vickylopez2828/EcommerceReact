import {useState} from 'react';
import Product from './Product'
import { ProductList } from '../interfaces/ProductList';
import { ProductItem } from '../interfaces/ProductItem';

type ListProps = ProductList & {
  setCart: React.Dispatch<React.SetStateAction<ProductItem[]>>
  cart: ProductItem[]
}
const ListProducts = ({ db, title, iconLeft, iconRight, setCart, cart }: ListProps) => {

  const [data] = useState(db);

  return (
    <>
      <article className='container-cards-title df'>
          <div className="title-section-cards df">
              <img src={iconLeft} alt="sale" />
              <h3 className='title'>{title}</h3>
              <img src={iconRight} alt="sale" />
              <p>Ver más</p>
          </div>
          <section className='container-cards df'>   
            {data.map((product)=>(
              <Product
                key={product.id}
                product={product}
                setCart = {setCart}
                cart={cart}
              />
            ))}
          </section>
        </article>
    </>
  )
}

export default ListProducts

  