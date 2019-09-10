import React, {Component} from 'react'
import {Link} from 'react-router-dom'

import store, {UPDATE_LOGIN} from '../store';

class Login extends Component{
    constructor(){
        super()
        this.state={  
            login: store.getState().login
        }
        this.handleChange = this.handleChange.bind(this)
    }

    //We will hold onto the user's login name so we can display it throughout the site, and we will subscribe to this change in state so we can display the user's name on the page as they type it in.
    componentDidMount(){
        store.subscribe(()=>this.setState({login: store.getState().login}))
    }
    handleChange(e) {
        let action = {
            type: UPDATE_LOGIN,
            payload: e.target.value
        }
        store.dispatch(action)
    }

    render(){
        return(
            <div className='LOGIN'>
            <h3>Enter a name and submit to shop</h3>
                <input className='login-input' onChange={this.handleChange}></input>
                <h2> {this.state.login}</h2>
                <Link to="/shop"><button className='Login-button' > Shop!</button></Link>
            </div>
        )
    }
}

export default Login