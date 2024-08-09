import {useState} from 'react';
import Card from './Card'
import { CardList } from '../interfaces/CardList';

const CardsList = ({ db, title, iconLeft, iconRight }: CardList) => {

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
              <Card
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

export default CardsList

  