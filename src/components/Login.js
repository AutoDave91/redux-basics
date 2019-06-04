import React, {Component} from 'react'
import store, {LOG_IN_USER} from '../store'
import {Link} from 'react-router-dom'

class Login extends Component{
    constructor(){
        super()
        this.state={  
            login: store.getState().login
    }}

    componentDidMount(){
        store.subscribe(()=>this.setState({login: store.getState().login}))
    }

   
   

    //We will hold onto the user's login name so we can display it throughout the site, and we will subscribe to this change in state so we can display the user's name on the page as they type it in.
    handleLogin(e){
        let action = {
            type: LOG_IN_USER,
            payload: e.target.value
        }
        store.dispatch(action)
    }
    

    render(){
        return(
            <div className='LOGIN'>
            <h3>Enter a name and submit to shop</h3>
                <input className='login-input' onChange={this.handleLogin}></input>
                <h2> {this.state.login}</h2>
                <Link to="/shop"><button className='Login-button' > Shop!</button></Link>
            </div>
        )
    }
}

export default Login