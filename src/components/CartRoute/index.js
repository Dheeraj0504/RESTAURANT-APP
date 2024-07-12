import {Link} from 'react-router-dom'
import CartContext from '../../context/CartContext'
import Header from '../Header'
import CartItem from '../CartItem'
import CartSummary from '../CartSummary'

import './index.css'

const CartRoute = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList, removeAllCartItems} = value

      const onClickRemoveAllItems = () => {
        // console.log('Btn Clicked')
        removeAllCartItems()
      }

      return (
        <>
          <Header />
          <div className="cart-container">
            {cartList.length < 1 ? (
              <div className="cart-empty-view-container">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-empty-cart-img.png"
                  className="cart-empty-img"
                  alt="cart empty"
                />
                <h1 className="cart-empty-heading">Your Cart Is Empty</h1>

                <Link to="/">
                  <button type="button" className="order-now-btn">
                    Order Now
                  </button>
                </Link>
              </div>
            ) : (
              <div className="cart-content-container">
                <h1 className="cart-heading">My Cart</h1>
                <button
                  type="button"
                  className="remove-all-btn"
                  onClick={onClickRemoveAllItems}
                >
                  Remove All
                </button>
                <ul className="cart-list">
                  {cartList.map(eachCartItem => (
                    <CartItem
                      key={eachCartItem.dishId}
                      cartItemDetails={eachCartItem}
                    />
                  ))}
                </ul>
                {/* TODO: Add your code for Cart Summary here */}
                <CartSummary />
              </div>
            )}
          </div>
        </>
      )
    }}
  </CartContext.Consumer>
)
export default CartRoute
