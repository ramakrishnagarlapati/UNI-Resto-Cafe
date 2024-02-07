import {useState, useEffect} from 'react'

import Navbar from '../Navbar'
import DishItem from '../DishItem'

import './index.css'

const RestaurantApp = () => {
  const [activeTabId, setActiveTabId] = useState(null)
  const [restaurantData, setRestaurantData] = useState([])
  const getRestaurantData = async () => {
    const response = await fetch(
      'https://run.mocky.io/v3/77a7e71b-804a-4fbd-822c-3e365d3482cc',
    )
    const data = await response.json()
    const activeMenuTabId = data[0]?.table_menu_list[0]?.menu_category_id
    setActiveTabId(activeMenuTabId)
    setRestaurantData(data)
  }
  useEffect(() => {
    getRestaurantData()
  }, [])

  const renderCategoriesList = () => {
    if (restaurantData.length) {
      const {table_menu_list: tableMenuList = []} = restaurantData[0]
      const categoriesList = tableMenuList.map(item => ({
        menuCategory: item.menu_category,
        menuCategoryId: item.menu_category_id,
      }))
      //   const settings = {
      //     infinite: false,
      //     speed: 500,
      //     slidesToShow: 6,
      //     slidesToScroll: 6,
      //     initialSlide: 0,
      //     responsive: [
      //       {
      //         breakpoint: 1024,
      //         settings: {
      //           slidesToShow: 4,
      //           slidesToScroll: 4,
      //           infinite: true,
      //         },
      //       },
      //       {
      //         breakpoint: 768,
      //         settings: {
      //           slidesToShow: 3,
      //           slidesToScroll: 3,
      //         },
      //       },
      //       {
      //         breakpoint: 480,
      //         settings: {
      //           slidesToShow: 2,
      //           slidesToScroll: 2,
      //         },
      //       },
      //     ],
      //   }
      return (
        <ul className="categories-list">
          {categoriesList.map(item => (
            <li className="category-item" key={item.menuCategoryId}>
              <button
                type="button"
                className={`category-item-btn ${
                  activeTabId === item.menuCategoryId && 'active'
                }`}
                onClick={() => setActiveTabId(item.menuCategoryId)}
              >
                {item.menuCategory}
              </button>
            </li>
          ))}
        </ul>
      )
    }
    return null
  }

  const renderDishesList = () => {
    if (restaurantData.length) {
      const {table_menu_list: tableMenuList} = restaurantData[0]
      const dishesList = []

      tableMenuList.forEach(item => {
        if (item.menu_category_id === activeTabId) {
          dishesList.push(...item.category_dishes)
        }
      })

      return (
        <ul className="dishes-list">
          {dishesList.map(item => (
            <DishItem key={item.dish_id} dishDetails={item} />
          ))}
        </ul>
      )
    }
    return null
  }

  return (
    <div className="App">
      <header className="App-header">
        <Navbar restaurantTitle={restaurantData[0]?.restaurant_name} />
      </header>
      {renderCategoriesList()}
      {renderDishesList()}
    </div>
  )
}

export default RestaurantApp
