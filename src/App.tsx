
import { useState } from 'react'
import './App.css'

import Footer from './components/Footer'
import Header from './components/Header'
import Home from './components/Home'
import { ProductItem } from './interfaces/ProductItem'
//import { ProductItem } from './interfaces/ProductItem';
//import {ProductItem} from './interfaces/ProductItem'

function App() {
  const initialState = (): ProductItem[] =>{
    const localStorageCart = localStorage.getItem('cart');
    return localStorageCart ? JSON.parse(localStorageCart) : []
  }
  const [cart, setCart] = useState<ProductItem[]>(initialState);
  console.log(cart, "cart")
  //mandar carrito al cart y el cart renderiza los item
  return (
    <>
      <Header
        cart = {cart}
        setCart = {setCart}
      />
 
      <Home
        cart = {cart}
        setCart = {setCart}
      />
      <Footer/>
    </>
  )
}

export default App
