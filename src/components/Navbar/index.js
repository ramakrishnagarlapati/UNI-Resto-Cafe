import {AiOutlineShoppingCart} from 'react-icons/ai'
import {useContext} from 'react'
import {CartContext} from '../../context/CartContext'
import './index.css'

const Navbar = ({restaurantTitle}) => {
  const {cartCount} = useContext(CartContext)
  return (
    <nav className="navbar">
      <h1 className="app-title">{restaurantTitle}</h1>
      <div className="cart-section">
        <p className="cart-description">My Orders</p>
        <div className="cart-icon-and-amount">
          <AiOutlineShoppingCart className="cart-icon" />
          <div className="cart-amount-container">
            <span className="cart-amount">{cartCount}</span>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
