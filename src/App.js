import RestaurantApp from './components/RestaurantApp'

import CartProvider from './context/CartContext'

import './App.css'

const App = () => (
  <>
    <CartProvider>
      <RestaurantApp />
    </CartProvider>
  </>
)

export default App
