import {useState} from 'react';
import Product from './Product'
import { ProductList } from '../interfaces/ProductList';

const ListProducts = ({ db, title, iconLeft, iconRight }: ProductList) => {

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
            {data.map((item)=>(
              <Product
                key={item.id}
                image={item.image}
                description={item.description}
                price= {item.price}
                percentageOff = {item.percentageOff}
                tagText= {item.tagText}
                freeShipping = {item.freeShipping}
                isOff={item.isOff}
              />
            ))}
          </section>
        </article>
    </>
  )
}

export default ListProducts

  