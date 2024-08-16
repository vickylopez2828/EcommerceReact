
import cartIcon from '../assets/icons/cart.svg'
import {ProductItem} from '../interfaces/ProductItem'
interface ProductProps {
    product: ProductItem;
    setCart: React.Dispatch<React.SetStateAction<ProductItem[]>>
    cart: ProductItem[]
}

const Product: React.FC<ProductProps> = ({product, setCart, cart}) => {
   // const {isOff, tagTextOff} = off
    const {image, description, price, percentageOff = 0, tagText, freeShipping, isOff} = product;
    const priceNormal = Math.trunc(price);
    const decimalPrice =  (price - Math.trunc(price)).toFixed(2).split('.')[1];
    const calcPriceOff = price - (price * percentageOff )/100
    const priceOff = Math.trunc(calcPriceOff);
    const priceOffDecimal = (calcPriceOff - Math.trunc(calcPriceOff)).toFixed(2).split('.')[1];


    function addToCart(product: ProductItem) {
        const itemExists = cart.findIndex(item => item.id === product.id)
        if(itemExists >= 0){
          if(cart[itemExists].quantity! >= cart[itemExists].stock!) return
          const updateCart = [...cart]
          updateCart[itemExists].quantity!++
          setCart(updateCart)
          console.log("ya existe")
        } else{
          //lo casteo para q tenga el tipo de dato
            const newItem : ProductItem = {...product, quantity: 1}
            setCart([...cart, newItem])   
          
        }
       
      }
    
  return (
    <>
        <div className='card card-tag'>
            <div className="container-card">
                <img className="img-card" src={image} />
                {tagText ?
                    <div className={isOff ? 'tag red' : 'tag'}>
                        <span>{isOff ? `${percentageOff} ${tagText}` :tagText}</span>
                    </div>
                    : <></>
                }
                
               <p className={isOff ? "price-card price-off": "close"}>${priceNormal} <span>{decimalPrice}</span></p>
                <p className="price-card"> {isOff ? `$${priceOff}` : `$${priceNormal}`}  
                    <span>{isOff ? priceOffDecimal : decimalPrice}</span>
                </p>
                <p className='card-descripcion'>{description}</p>
                <div className='container-footer-card df'>
                    {freeShipping 
                        ? <p>Envío gratis</p>
                        : <p className='no-free'>Sin Envío gratis</p>
                    }
                    <button onClick={()=>addToCart(product)} className='btn-buy df jc-c' id='btn-buy'>
                        <img src={cartIcon} alt="cart" />
                        {/* {quantity > 0 ? 'AGREGAR OTRO' : '' } */}
                        COMPRAR
                    </button>
                </div>
            </div>
        </div>
    </>
  )
}

export default Product
