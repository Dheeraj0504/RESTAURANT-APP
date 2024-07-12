import {AiFillCloseCircle} from 'react-icons/ai'

import CartContext from '../../context/CartContext'

import './index.css'

const CartItem = props => (
  <CartContext.Consumer>
    {value => {
      const {
        removeCartItem,
        incrementCartItemQuantity,
        decrementCartItemQuantity,
      } = value
      const {cartItemDetails} = props
      const {
        dishId,
        dishName,
        dishImage,
        dishCalories,
        dishCurrency,
        dishPrice,
        quantity,
      } = cartItemDetails

      const onRemoveCartItem = () => {
        removeCartItem(dishId)
      }
      // TODO: Update the functionality to increment and decrement quantity of the cart item
      const onIncrementQuantity = () => {
        incrementCartItemQuantity(dishId)
      }
      const onDecrementQuantity = () => {
        if (quantity < 2) {
          removeCartItem(dishId)
        } else {
          decrementCartItemQuantity(dishId)
        }
      }
      return (
        <li className="cart-item">
          <img className="cart-product-image" src={dishImage} alt="dishImage" />
          <div className="cart-item-details-container">
            <div className="cart-product-title-brand-container">
              <p className="cart-product-title">{dishName}</p>
              <p className="cart-product-brand cart-calories">
                {dishCalories} Calories
              </p>
            </div>
            <div className="cart-quantity-container">
              {/* eslint-disable-next-line */}
              <button
                onClick={onDecrementQuantity}
                type="button"
                data-testid="minus"
                className="quantity-controller-button"
              >
                -
              </button>
              <p className="cart-quantity">{quantity}</p>
              {/* eslint-disable-next-line */}
              <button
                onClick={onIncrementQuantity}
                type="button"
                data-testid="plus"
                className="quantity-controller-button"
              >
                +
              </button>
            </div>
            <div className="total-price-remove-container">
              <p className="cart-total-price">
                {dishCurrency} {dishPrice * quantity}/-
              </p>
              <button
                className="remove-button"
                type="button"
                data-testid="remove"
                onClick={onRemoveCartItem}
              >
                Remove
              </button>
            </div>
          </div>
          {/* eslint-disable-next-line */}
          <button
            className="delete-button"
            type="button"
            data-testid="remove"
            onClick={onRemoveCartItem}
          >
            <AiFillCloseCircle color="#616E7C" size={20} />
          </button>
        </li>
      )
    }}
  </CartContext.Consumer>
)

export default CartItem
