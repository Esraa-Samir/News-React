import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import LogIn from '../Components/LogIn'
import HomeDumb from '../Components/HomeDumb';
import FormDumb from '../Components/FormDumb';
import CustomNewsDumb from '../Components/CustomNewsDumb';

class Router extends Component {
    constructor(props) {
        super(props);
        this.state = {
            CustomNews: null
        }
    }

    handleData(newdata) {
        this.setState(prevState => ({
          contacts: [...prevState.CustomNews, newdata]
        }));
    }

    render() {
        return (
            <BrowserRouter>
                <React.Fragment>
                    <Switch>
                        <Route path="/" render={()=><LogIn/>} exact/>
                        <Route path="/Home" render={()=><HomeDumb/>} exact/>
                        <Route path="/Form" render={()=><FormDumb handlerFromParant={this.handleData}/>} exact/>
                        <Route path="/CustomNews" render={()=><CustomNewsDumb/>} exact/>
                    </Switch>
                </React.Fragment>
            </BrowserRouter>

        )
    }
}

export default Router