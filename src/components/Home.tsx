import CardsList from './CardsList'
import Carrousel from './Carrousel'
import Category from './Category';
import { cardData } from '../db/cardData';

import iconSale from '../assets/icons/sale.svg'
import iconNewLeft from '../assets/icons/novedad-left.svg'
import iconNewRight from '../assets/icons/novedad-right.svg'
import iconArt from '../assets/icons/arte.svg'
import iconTeddy from '../assets/icons/teddy.svg'
import iconGame from '../assets/icons/games.svg'
import publicity from '/images/publiOk.png'


const Home = () => {

  return (
    <>
      <div className='home-body'>
        <Carrousel></Carrousel>
        <div className='container-category-ages df'>
          <button>0 a 12 MESES</button>
          <button>1 A 3 AÑOS</button>
          <button>4 A 6 AÑOS</button>
          <button>7 A 9 AÑOS</button>
          <button>10 A 12 AÑOS</button>
          <button>ADOLESCENTES</button>
        </div>
          <CardsList
            db={cardData}
            title='OFERTAS DEL DÍA'
            iconLeft={iconSale}
            iconRight= {iconSale}
          />
          <CardsList
            db={cardData}
            title='NOVEDADES'
            iconLeft={iconNewLeft}
            iconRight= {iconNewRight}
          />
          <Category/>
          <CardsList
            db={cardData}
            title='ARTE'
            iconLeft={iconArt}
            iconRight= {iconArt}
          />
          <CardsList
            db={cardData}
            title='PARA LOS MÁS CHICOS'
            iconLeft={iconTeddy}
            iconRight= {iconTeddy}
          />
          <div className='publicity'>
            <img src={publicity} alt="" />
            <button>VER ARTÍCULOS</button>
          </div>
           <CardsList
            db={cardData}
            title='PARA LOS MÁS GRANDES'
            iconLeft={iconGame}
            iconRight= {iconGame}
          />
      </div>
      
    </>
  )
}

export default Home
