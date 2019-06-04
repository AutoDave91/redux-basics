import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Login from "./components/Login"
import Shop from "./components/Shop"
import Checkout from "./components/Checkout"
import Cart from "./components/Cart"

export default (
    <Switch>
        <Route exact path="/" component={Login}></Route>
        <Route  path="/shop" component={Shop}></Route>
        <Route  path="/cart" component={Cart}></Route>
        <Route  path="/checkout" component={Checkout}></Route>
    </Switch>
)