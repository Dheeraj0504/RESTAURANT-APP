import {Component} from 'react'
import './index.css'

class DishItems extends Component {
  state = {
    quantity: 0,
  }

  onIncreaseQuantity = () => {
    // console.log('Btn clicked')
    const {onIncrease} = this.props
    this.setState(prevState => ({quantity: prevState.quantity + 1}))
    onIncrease()
  }

  onDecreaseQuantity = () => {
    // console.log('Btn clicked')
    const {onDecrease} = this.props
    const {quantity} = this.state
    if (quantity === 0) {
      this.setState({quantity: 0})
    } else {
      this.setState(prevState => ({quantity: prevState.quantity - 1}))
      onDecrease()
    }
  }

  renderControllerButton = () => {
    const {quantity} = this.state
    return (
      <div className="controller-container">
        <button
          className="quantity-button"
          type="button"
          onClick={this.onDecreaseQuantity}
        >
          -
        </button>
        <p className="quantity">{quantity}</p>
        <button
          className="quantity-button"
          type="button"
          onClick={this.onIncreaseQuantity}
        >
          +
        </button>
      </div>
    )
  }

  render() {
    // const {quantity} = this.state
    const {dish} = this.props
    const {
      dishId,
      dishName,
      dishImage,
      dishCalories,
      dishAvailability,
      dishCurrency,
      dishDescription,
      dishPrice,
      addonCat,
    } = dish

    return (
      <li className="dish-items-card">
        <div className="card-container">
          <div className={`box  ${dishPrice > 10 ? 'high-rate-props' : ''}`}>
            <p
              className={`circle ${dishPrice > 10 ? 'high-rate-circle' : ''}`}
            />
          </div>
          <div className="dish-details-container">
            <h1 className="name-text">{dishName}</h1>
            <p className="price-text">{`${dishCurrency} ${dishPrice}`}</p>
            <p className="description">{dishDescription}</p>
            {dishAvailability ? (
              this.renderControllerButton()
            ) : (
              <p className="not-availability-text">Not available</p>
            )}
            {addonCat.length !== 0 && (
              <p className="addon-availability-text">
                Customizations available
              </p>
            )}
          </div>
        </div>
        <p className="calories-num calories-num-sm">{`${dishCalories} Calories`}</p>
        <div className="cal-img-card">
          <p className="calories-num calories-num-lg">{`${dishCalories} Calories`}</p>
          <img className="dish-img" alt={dishName} src={dishImage} />
        </div>
      </li>
    )
  }
}
export default DishItems