import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css';
import { withRouter } from "react-router-dom";

class LogIn extends Component{
    constructor(props){
        super(props);
        this.state = {
            Admin: "admin@gmail.com",
            Password: "password",
            flag: false
        }
    }

    handleChange(event){
        console.log("shfdjksdgf");
        this.setState({ 
            [event.target.id]: event.target.value,
        })
    }

    submitHandler(event){
        event.preventDefault();
        if(this.state.flag === true){
            this.props.logedIn.logedIn = true;
            this.props.history.push("/Home");
        }
        else{
            alert("Your E-mail or Password is Incorrect");
        }
    }

    check(){
        console.log("sdfsdg");
        if(this.state.Admin === this.state.inputEmail && this.state.Password === this.state.inputPassword){
            this.setState({flag: true})
        }
    }

    render() {
        return <div className="container">
            <form className="form-signin" /*onSubmit={this.submitHandler}*/>
                <h2 className="form-signin-heading">Please sign in</h2>
                <label className="sr-only">Email address</label>
                <input onMouseLeave={this.check.bind(this)} onChange={this.handleChange.bind(this)} type="email" id="inputEmail" className="form-control" placeholder="Email address" required=""/>
                <label className="sr-only">Password</label>
                <input onMouseLeave={this.check.bind(this)} onChange={this.handleChange.bind(this)} type="password" id="inputPassword" className="form-control" placeholder="Password" required="" />
                    <div className="checkbox">
                        <label>
                            <input type="checkbox" value="remember-me" /> Remember me 
                        </label>
                    </div>
                    <button to ="/Home" className="btn btn-lg btn-primary btn-block" type="submit" onClick={this.submitHandler.bind(this)}>Sign in</button>
            </form>
        </div>
    }
}
                            
export default withRouter(LogIn);