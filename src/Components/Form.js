import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css';

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
    }

    render() {
        return (
            // <div>hello</div>
            <div className="container form">
                <h2>Add New Contact</h2>
                <form action="/action_page.php" onSubmit={this.submitHandler}>
                    <div className="form-group">
                        <label>Title:</label>
                        <input onChange={this.handleChange.bind(this)} className="form-control" id="userId" placeholder="Enter Tilte"/>
                    </div>
                    <div className="form-group">
                        <label>Author Name:</label>
                        <input onChange={this.handleChange.bind(this)} className="form-control" id="jobTitleName" placeholder="Enter author name"/>
                    </div>
                    <div className="form-group">
                        <label>Description:</label>
                        <input onChange={this.handleChange.bind(this)} className="form-control" id="firstName" placeholder="Description"/>
                    </div>
                    <button type="submit" className="btn btn-primary" onClick={this.props.update}><Link to="/CustomNews">Add Custom News</Link></button> 
                </form>
            </div>
        );
    }

}


export default Form;