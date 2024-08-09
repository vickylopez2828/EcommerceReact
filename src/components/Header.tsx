import logo from '/images/logo-listo.png';
import iconMenu from '../assets/icons/menu-hamburger.svg';
import iconCart from '../assets/icons/cart.svg';
import search from '../assets/icons/search.svg'
const Header = () => {
  return (
    <>
        <section className='header'>
            <div className='logo'>
                <img src={logo} alt="logo"/>
            </div>
            <div className='container-input'>
                <input className='input-header tx-xs' type="text" placeholder='Buscar productos...' />
                <img className='icon-search' src={search} alt="" />
            </div>
            <div className='icon-menu-hamburger df jc-fe'>
                <img src={iconMenu} alt="icon-menu" />
            </div>
            <div className='container-login'>
                <h5 className='h5'>REGISTRATE</h5>
                <h5 className='h5'>INGRESÁ</h5>
            </div>
            <div className='icon-cart df jc-c'>
                <img src={iconCart} alt="icon-cart" />
            </div>
            
        </section>
        
        
    </>
  )
}

export default Header
