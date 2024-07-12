import {Link, withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'
import {IoCartOutline} from 'react-icons/io5'
import CartContext from '../../context/CartContext'
import './index.css'

const Header = props => {
  // console.log(props)
  const {history} = props

  const onClickLogout = () => {
    // console.log('Logout Btn Clicked')
    Cookies.remove('jwt_token')
    history.replace('/login')
  }

  return (
    <CartContext.Consumer>
      {value => {
        const {cartList} = value
        console.log(cartList.length)
        return (
          <div className="header-container">
            <Link to="/" className="link">
              <h1 className="heading">UNI Resto Cafe</h1>
            </Link>
            <div className="nav-items-container">
              <p className="my-order-text">My Orders</p>
              <Link to="/cart" className="link">
                <div className="cart-card">
                  <IoCartOutline className="cart-icon" />
                  <span className="cart-count">{cartList.length}</span>
                </div>
              </Link>
              <button
                className="logout-button"
                type="button"
                onClick={onClickLogout}
              >
                Logout
              </button>
            </div>
          </div>
        )
      }}
    </CartContext.Consumer>
  )
}
export default withRouter(Header)
