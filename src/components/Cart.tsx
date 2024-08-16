import '../styles/cart.css';
import iconClose from '../assets/icons/close.svg'
import trash from '../assets/icons/papelera.svg'
import { ProductItem } from '../interfaces/ProductItem';
import { useEffect, useMemo } from 'react';


interface CartProps {
    isOpen: boolean;
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
    setCart: React.Dispatch<React.SetStateAction<ProductItem[]>>
    cart: ProductItem[]
}


const Cart: React.FC<CartProps> = ({isOpen, setIsOpen, cart, setCart}) => {
    const isEmpty = cart.length === 0;
    const closeCart = () =>{
        setIsOpen(false)
    }
    useEffect(()=>{
        localStorage.setItem('cart', JSON.stringify(cart));
    },[cart])
    const formatPrice = (price:number) =>{
        return new Intl.NumberFormat('es-AR', {currency: 'ARS', style: 'currency'}).format(price)
    }

    const totalCart= useMemo( () => formatPrice(cart.reduce((total, item) => total + (item.price * item.quantity!), 0)), [cart])
   
    const totalItem = (product: ProductItem) => {
        const rdo = formatPrice(product.price * product.quantity!)
        
        return rdo
    } 
    const decreaseQuantity = (id:number) =>{
        const updatedCart = cart.map( item => {
            if(item.id === id && item.quantity! > 1){
              return{
                ...item,
                quantity: item.quantity! - 1
              }
            }
            return item
          })
          setCart(updatedCart)
    }
    const increaseQuantity = (id:number) =>{
        const updatedCart = cart.map( item => {
            if(item.id === id && item.quantity! < item.stock!){
              return{
                ...item,
                quantity: item.quantity! + 1
              }
            }
            return item
          })
          setCart(updatedCart)
    }
    const removeFromCart =  (id:number) => {
        setCart(prevCart => prevCart.filter(item => item.id !== id))
    }
    const clearCart = () =>{
        setCart([])
    }

  return (
    <>
      <div className= {isOpen ? 'container-cart': 'container-cart close'} >
            <div className='header-cart'>
                <h5>Carrito de Compras</h5>
                <button onClick={closeCart}><img src={iconClose} alt={iconClose} /></button>
                
            </div>
            {
                isEmpty ? 
                <>
                    <div className='cart-body-empty'>
                        <p className='tx-empty'>El carrito se encuentra vacío</p>
                    </div>
                </>
                 :
                <> 
                    <div className= 'cart-body'>
                    {
                        cart.map(item =>(
                            <div key={item.id} className='item-cart'>
                                <div className='container-img-cart'>
                                    <img className='img-cart' src={item.image} alt="" />
                                </div>
                                <div className='container-description'>
                                    <p className='description'>{item.description}</p>
                                    <div className='quantity'>
                                        <div className='input-quantity'>
                                            <button onClick={()=>decreaseQuantity(item.id)} className='subtract'>-</button>
                                            <span>{item.quantity}</span>
                                            
                                            <button onClick={() => increaseQuantity(item.id)}>+</button>
                                        </div>
                                        <p><span>{item.quantity}</span> x{formatPrice(item.price)}</p>
                                    </div>
                                </div>
                                <div className='price'>
                                    <button onClick={()=> removeFromCart(item.id)}><img src={trash} alt={trash} /></button>
                                    <p>{totalItem(item)}</p>
                                </div>

                            </div>
                        ))
                    }
                    </div>
                    <div className='cart-footer'>
                        <div className='footer-price'>
                            <p>Total</p>
                            <p>{totalCart}</p>
                        </div>
                        <button>FINALIZAR COMPRA</button>
                        <button onClick={clearCart} className='clear-cart'>VACIAR CARRITO</button>
                    </div> 
                </>
            }
      </div>
    </>
  )
}

export default Cart
