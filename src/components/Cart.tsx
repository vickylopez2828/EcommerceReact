import '../styles/cart.css';
import iconClose from '../assets/icons/close.svg'
import bb from '/images/bebe.png'
import trash from '../assets/icons/papelera.svg'
import { useState } from 'react';

const Cart = () => {
    const [quantity, setQuantity] = useState(0);
    const [stock, setStock] = useState(10);
    const [totalItem, setTotalItem] = useState(0);
    console.log(setStock, setTotalItem)
    const decreaseQuantity = () =>{
        setQuantity(prevQuantity => {
            return prevQuantity > 0 ? prevQuantity - 1 : prevQuantity;
        });
    }
    const increaseQuantity = () =>{
        setQuantity(prevQuantity => {
            return prevQuantity < stock ? prevQuantity + 1 : prevQuantity;
        });
    }

  return (
    <>
      <div className='container-cart'>
            <div className='header-cart'>
                <h5>Carrito de Compras</h5>
                <img src={iconClose} alt={iconClose} />
            </div>
            <div className='cart-body'>
                <div className='item-cart'>
                    <div className='container-img-cart'>
                        <img className='img-cart' src={bb} alt="" />
                    </div>
                    <div className='container-description'>
                        <p className='description'>Muñeca Cry Babies Dressy Bebe Lloron Con Pelo Real Original</p>
                        <div className='quantity'>
                            <div className='input-quantity'>
                                <button onClick={decreaseQuantity} className='subtract'>-</button>
                                <input type="number" value={quantity}/>
                                <button onClick={increaseQuantity}>+</button>
                            </div>
                            <p><span>{quantity}</span> x$30.599,50</p>
                        </div>
                    </div>
                    <div className='price'>
                        <button><img src={trash} alt={trash} /></button>
                        <p> {totalItem}</p>
                    </div>

                </div>

            </div>
      </div>
    </>
  )
}

export default Cart
