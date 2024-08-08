import {useState} from 'react';
import Card from './Card'
import { db } from '../db/db';

import iconSale from '../assets/icons/sale.svg'
//import imgCard from '../assets/images/bebe.png';


// const db = require('../data/data');


const CardsList : React.FC = () => {

  const [data, setData] = useState(db);
  console.log(setData);
  // useEffect ( () => {
  //    setData(db)
  // }, [data]);

  return (
    <>
      <article className='container-cards-title df'>
          <div className="title-section-cards df">
              <img src={iconSale} alt="sale" />
              <h3 className='title'>OFERTAS DEL DÍA</h3>
              <img src={iconSale} alt="sale" />
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
            {/* <Card
              image={imgCard}
              description='Muñeca Cry Babies Dressy Bebe Lloron Con Pelo Real...'
              price= {31999.50}
              //priceOff={0}
              tagText= 'NUEVO'
              freeShipping = {true}
              isOff={false}
            />
             <Card
              image={imgCard}
              description='Muñeca Cry Babies Dressy Bebe Lloron Con Pelo Real...'
              price= {17500.50}
              percentageOff={30}
              //priceOff={35000}
              tagText= '% OFF'
              freeShipping = {true}
              isOff={true}
            />
            <Card
              image={imgCard}
              description='Muñeca Cry Babies Dressy Bebe Lloron Con Pelo Real...'
              price= {17500.00}
              percentageOff={30}
              //priceOff={35000}
              tagText= '% OFF'
              freeShipping = {false}
              isOff={true}
            />
              <Card
              image={imgCard}
              description='Muñeca Cry Babies Dressy Bebe Lloron Con Pelo Real...'
              price= {31999.50}
              //priceOff={0}
              tagText= 'NUEVO'
              freeShipping = {true}
              isOff={false}
            />
             <Card
              image={imgCard}
              description='Muñeca Cry Babies Dressy Bebe Lloron Con Pelo Real...'
              price= {17500.00}
              //priceOff={35000}
              percentageOff={30}
              tagText= '% OFF'
              freeShipping = {true}
              isOff={true}
            />
            <Card
              image={imgCard}
              description='Muñeca Cry Babies Dressy Bebe Lloron Con Pelo Real...'
              price= {17500.00}
              //priceOff={35000}
              percentageOff={30}
              tagText= '% OFF'
              freeShipping = {false}
              isOff={true}
            /> */}
          
          </section>
        </article>
    </>
  )
}

export default CardsList

  // useEffect ( () => {
  //   setData(db)
  // }, []);

//     const next = document.querySelectorAll('img.next');
//   const scroll = () =>{
//     next.forEach(e => {
//       e.addEventListener('click', function() {
//           e.previousElementSibling!.scrollLeft += 350
//           // e.previousElementSibling?.classList.add('efect-scroll');
//           // console.log(e.previousElementSibling);
//           // setTimeout(function (){   
//           //     e.previousElementSibling?.classList.remove('efect-scroll');
//           // }, 1500);
//       });
//   });
//   }
//   console.log(scroll())
