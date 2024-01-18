import {useState, createContext} from 'react'

export const CartContext = createContext()

const CartProvider = ({children}) => {
  const [cartCount, setCartCount] = useState(0)

  return (
    <CartContext.Provider value={{cartCount, setCartCount}}>
      {children}
    </CartContext.Provider>
  )
}

export default CartProvider
