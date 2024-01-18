import {useState, useContext} from 'react'

import './index.css'
import {CartContext} from '../../context/CartContext'

const DishItem = ({dishDetails}) => {
  const {
    dish_Type: dishType,
    dish_name: dishName,
    dish_price: dishPrice,
    dish_image: dishImage,
    dish_currency: dishCurrency,
    dish_calories: dishCalories,
    dish_description: dishDescription,
    dish_Availability: dishAvailability,
    addonCat,
  } = dishDetails

  const [itemCount, setItemCount] = useState(0)
  const {cartCount, setCartCount} = useContext(CartContext)
  const handleBtnClick = actionType => {
    if (actionType === 'INCREMENT_VALUE') {
      setItemCount(itemCount + 1)
      setCartCount(cartCount + 1)
    } else if (actionType === 'DECREMENT_VALUE' && itemCount > 0) {
      setItemCount(itemCount - 1)
      setCartCount(cartCount - 1)
    }
  }
  return (
    <li className="dish-item">
      <div
        className={`dish-type-container ${dishType === 1 ? 'non-veg' : 'veg'}`}
      >
        <div className={`dish-type ${dishType === 1 ? 'non-veg' : 'veg'}`} />
      </div>
      <div className="dish-details">
        <h2 className="dish-name">{dishName}</h2>
        <p className="dish-price">
          {dishCurrency} {dishPrice}
        </p>
        <p className="dish-description">{dishDescription}</p>
        {dishAvailability ? (
          <div>
            <div className="cart-control-btns-container">
              <button
                type="button"
                className="cart-control-btn"
                onClick={() => handleBtnClick('DECREMENT_VALUE')}
              >
                -
              </button>
              <p className="item-count">{itemCount}</p>
              <button
                type="button"
                className="cart-control-btn"
                onClick={() => handleBtnClick('INCREMENT_VALUE')}
              >
                +
              </button>
            </div>

            {addonCat.length ? (
              <p className="customizations-availabilty">
                Customizations Available
              </p>
            ) : null}
          </div>
        ) : (
          <p className="dish-not-available">Not Available</p>
        )}
      </div>
      <p className="dish-calories">{dishCalories} calories</p>

      <img src={dishImage} className="dish-image" alt="dish" />
    </li>
  )
}

export default DishItem
