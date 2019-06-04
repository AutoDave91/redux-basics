import React, {Component} from 'react'
import store from "../store"

class Cart extends Component{
    constructor(props){
        super(props)

        //We get everything we need from the store so we can display it in the cart

        this.state = {
            total: store.getState().total,
            cart: store.getState().cart,
            user: store.getState().login
        }
    }
    

    
    render(){
        return(
            <div className = 'CART'>
            
            <h1>{this.state.user ? this.state.user : `Customer`}'s Cart</h1>
                
                {this.state.cart.length===0 ? <h2>You're cart is emtpy. Start shopping!</h2> : <h2>Items: </h2>  }
                { this.state.cart.map((product, index)=> {
                    return(
                    <ul key={index}>
                    <h4>{product.name}</h4>
                    <h4>${product.price}</h4>
                    </ul>)
                })}
                
                <h1>Total: ${this.state.total}</h1>

            </div>
        )
    }
}

export default Cart