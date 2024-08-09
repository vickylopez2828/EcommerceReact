
import cart from '../assets/icons/cart.svg'
import ProductItem from '../interfaces/ProductItem'

const Product = ({image, description, price, percentageOff = 0, tagText, freeShipping, isOff}: ProductItem) => {
   // const {isOff, tagTextOff} = off
    const priceNormal = Math.trunc(price);
    const decimalPrice =  (price - Math.trunc(price)).toFixed(2).split('.')[1];
    const calcPriceOff = price - (price * percentageOff )/100
    const priceOff = Math.trunc(calcPriceOff);
    const priceOffDecimal = (calcPriceOff - Math.trunc(calcPriceOff)).toFixed(2).split('.')[1];
    const addToCart = () =>{
        //console.log(isOff)
        const btn  = document.getElementById('btn-buy');
        btn!.textContent = 'AGREGAR OTRO';
    }
  return (
    <>
        <div className='card card-tag'>
            <div className="container-card">
                <img className="img-card" src={image} />
                {tagText &&
                    <div className={isOff ? 'tag red' : 'tag'}>
                        <span>{isOff ? `${percentageOff} ${tagText}` :tagText}</span>
                    </div>
                }
                
               <p className={isOff ? "price-card price-off": "close"}>${priceNormal} <span>{decimalPrice}</span></p>
                <p className="price-card"> {isOff ? `$${priceOff}` : `$${priceNormal}`}  
                    <span>{isOff ? priceOffDecimal : decimalPrice}</span>
                    {/* {isOff && <span className='price-off-text'>35% OFF</span>} */}
                </p>
                <p className='card-descripcion'>{description}</p>
                <div className='container-footer-card df'>
                    {/* <p className={freeShipping ? '' : 'no-free'}>Envío gratis</p> */}
                    {freeShipping 
                        ? <p>Envío gratis</p>
                        : <p className='no-free'>Sin Envío gratis</p>
                    }
                    <button onClick={addToCart} className='btn-buy df jc-c' id='btn-buy'>
                        <img src={cart} alt="cart" />
                        COMPRAR
                    </button>
                </div>
            </div>
        </div>
    </>
  )
}

export default Product
