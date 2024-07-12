import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom'
import {Component} from 'react'

import LoginRoute from './components/LoginRoute'
import Home from './components/Home'
import CartRoute from './components/CartRoute'
import NotFound from './components/NotFound'
import ProtectedRoute from './components/ProtectedRoute'

import CartContext from './context/CartContext'

import './App.css'

//  write your code here
class App extends Component {
  state = {
    cartList: [],
  }

  removeAllCartItems = () => {
    this.setState({cartList: []})
  }

  removeCartItem = id => {
    const {cartList} = this.state
    const filtredData = cartList.filter(each => each.dishId !== id)
    this.setState({cartList: filtredData})
  }

  addCartItem = item => {
    // console.log(item)
    this.setState(prev => ({cartList: [...prev.cartList, item]}))
  }

  incrementCartItemQuantity = id => {
    const {cartList} = this.state
    const updatedCartList = cartList.map(each => {
      if (each.dishId === id) {
        const newQty = each.quantity + 1
        return {...each, quantity: newQty}
      }
      return each
    })
    this.setState({cartList: updatedCartList})
  }

  decrementCartItemQuantity = id => {
    const {cartList} = this.state
    const updatedCartList = cartList.map(each => {
      if (each.dishId === id) {
        const newQty = each.quantity - 1
        return {...each, quantity: newQty}
      }
      return each
    })
    this.setState({cartList: updatedCartList})
  }

  render() {
    const {cartList} = this.state
    return (
      <CartContext.Provider
        value={{
          cartList,
          addCartItem: this.addCartItem,
          removeAllCartItems: this.removeAllCartItems,
          removeCartItem: this.removeCartItem,
          incrementCartItemQuantity: this.incrementCartItemQuantity,
          decrementCartItemQuantity: this.decrementCartItemQuantity,
        }}
      >
        <BrowserRouter>
          <Switch>
            <Route exact path="/login" component={LoginRoute} />
            <ProtectedRoute exact path="/" component={Home} />
            <ProtectedRoute exact path="/cart" component={CartRoute} />
            <Route path="/not-found" component={NotFound} />
            <Redirect to="not-found" />
          </Switch>
        </BrowserRouter>
      </CartContext.Provider>
    )
  }
}
export default App
