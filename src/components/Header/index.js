import {IoCartOutline} from 'react-icons/io5'
import './index.css'

const Header = props => {
  console.log(props)
  const {count} = props

  // let totalQuantiy = 0
  // cartItems.forEach(eachCartItem => {
  //   totalQuantiy += eachCartItem.quantity
  // })

  return (
    <div className="header-container">
      <h1 className="heading">UNI Resto Cafe</h1>
      <div className="nav-items-container">
        <p className="my-order-text">My Orders</p>
        <div className="cart-card">
          <IoCartOutline className="cart-icon" />
          <span className="cart-count">{count}</span>
        </div>
      </div>
    </div>
  )
}
export default Header
