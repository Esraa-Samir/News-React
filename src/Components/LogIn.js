import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css';

class LogIn extends Component {
    render() {
        return <div className="container">
            <form className="form-signin">
                <h2 className="form-signin-heading">Please sign in</h2>
                <label className="sr-only">Email address</label>
                <input type="email" id="inputEmail" className="form-control" placeholder="Email address" required=""/>
                <label className="sr-only">Password</label>
                <input type="password" id="inputPassword" className="form-control" placeholder="Password" required="" />
                    <div className="checkbox">
                        <label>
                            <input type="checkbox" value="remember-me" /> Remember me 
                        </label>
                    </div>
                    <Link to ="/Home" className="btn btn-lg btn-primary btn-block" type="submit">Sign in</Link>
            </form>
        </div>
            }
}
                            
export default LogIn;