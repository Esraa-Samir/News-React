import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css';
import { withRouter } from "react-router-dom";

class Form extends Component {
       
    handleChange = this.handleChange.bind(this)
    submitHandler = this.submitHandler.bind(this)   
    
    handleChange(event) {
        this.setState({ 
            [event.target.id]: event.target.value,
         })
    }
        
    submitHandler(event) {
        event.preventDefault();
        this.props.handlerFromParant(this.state);
        this.props.history.push("/CustomNews");
    }

    render() {
        return (
            // <div>hello</div>
            <div className="container form">
                <h2>Add New News</h2>
                <form action="/action_page.php" onSubmit={this.submitHandler.bind(this)}>
                    <div className="form-group">
                        <label>Title:</label>
                        <input onChange={this.handleChange.bind(this)} className="form-control" id="Title" placeholder="Enter Tilte"/>
                    </div>
                    <div className="form-group">
                        <label>Img URL:</label>
                        <input onChange={this.handleChange.bind(this)} className="form-control" id="Title" placeholder="Enter Tilte"/>
                    </div>
                    <div className="form-group">
                        <label>Author Name:</label>
                        <input onChange={this.handleChange.bind(this)} className="form-control" id="ImgURL" placeholder="Enter author name"/>
                    </div>
                    <div className="form-group">
                        <label>Description:</label>
                        <input onChange={this.handleChange.bind(this)} className="form-control" id="Description" placeholder="Description"/>
                    </div>
                    <button type="submit" className="btn btn-primary" onClick={this.props.redirect}></button> 
                </form>
            </div>
        );
    }

}


export default withRouter(Form);