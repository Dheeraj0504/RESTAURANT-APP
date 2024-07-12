import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'

import Header from '../Header'
import TabMenuList from '../TabMenuList'
import DishItems from '../DishItems'

import './index.css'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class Home extends Component {
  state = {
    apiStatus: apiStatusConstants.initial,
    restaurantData: {},
    activeTabId: '',
  }

  componentDidMount() {
    this.getRestaurantData()
  }

  getRestaurantData = async () => {
    this.setState({
      apiStatus: apiStatusConstants.inProgress,
    })
    const jwtToken = Cookies.get('jwt_token')
    const url =
      'https://apis2.ccbp.in/restaurant-app/restaurant-menu-list-details'
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }

    const response = await fetch(url, options)
    const data = await response.json()
    // console.log(data)
    // console.log(response)
    if (response.ok === true) {
      const updatedData = data[0].table_menu_list.map(eachMenu => ({
        menuCategory: eachMenu.menu_category,
        menuCategoryId: eachMenu.menu_category_id,
        menuCategoryImage: eachMenu.menu_category_image,
        categoryDishes: eachMenu.category_dishes.map(eachDish => ({
          dishId: eachDish.dish_id,
          dishName: eachDish.dish_name,
          dishPrice: eachDish.dish_price,
          dishImage: eachDish.dish_image,
          dishCurrency: eachDish.dish_currency,
          dishCalories: eachDish.dish_calories,
          dishDescription: eachDish.dish_description,
          dishAvailability: eachDish.dish_Availability,
          dishType: eachDish.dish_Type,
          addonCat: eachDish.addonCat,
        })),
      }))

      this.setState({
        restaurantData: updatedData,
        apiStatus: apiStatusConstants.success,
        activeTabId: updatedData[0].menuCategoryId,
      })
    } else {
      this.setState({
        apiStatus: apiStatusConstants.failure,
      })
    }
  }

  renderLoadingView = () => (
    <div className="loader-container">
      <Loader type="ThreeDots" color="#0b69ff" height="50" width="50" />
    </div>
  )

  onChangeActiveTab = id => {
    this.setState({activeTabId: id})
  }

  renderSuccessView = () => {
    const {restaurantData, activeTabId} = this.state
    // console.log(restaurantData)
    // console.log(activeTabId)
    const currentActiveTabDishes = restaurantData.filter(
      each => each.menuCategoryId === activeTabId,
    )
    // console.log(currentActiveTabDishes)

    const {categoryDishes} = currentActiveTabDishes[0]
    // console.log(categoryDishes)

    return (
      <>
        <div className="tabs-menu-container">
          <ul className="tabs-container">
            {restaurantData.map(eachData => (
              <TabMenuList
                key={eachData.menuCategoryId}
                id={eachData.menuCategoryId}
                tabList={eachData.menuCategory}
                isActive={eachData.menuCategoryId === activeTabId}
                onChangeTabId={this.onChangeActiveTab}
              />
            ))}
          </ul>
        </div>
        <div className="dish-items-containers">
          <ul className="dish-items-menu">
            {categoryDishes.map(each => (
              <DishItems key={each.dishId} dish={each} />
            ))}
          </ul>
        </div>
      </>
    )
  }

  renderFailureView = () => (
    <div className="failure-container">
      <h1 className="errorMsg">Failed To Load...</h1>
    </div>
  )

  renderApiStatus = () => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case apiStatusConstants.inProgress:
        return this.renderLoadingView()
      case apiStatusConstants.success:
        return this.renderSuccessView()
      case apiStatusConstants.failure:
        return this.renderFailureView()
      default:
        return null
    }
  }

  render() {
    // console.log(restaurantName)
    return (
      <>
        <div className="home-container">
          <Header />
          {this.renderApiStatus()}
        </div>
      </>
    )
  }
}
export default Home
