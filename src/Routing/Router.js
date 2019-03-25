import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import LogIn from '../Components/LogIn'
import HomeDumb from '../Components/HomeDumb';
import FormDumb from '../Components/FormDumb';
import Form from '../Components/Form';
import CustomNewsDumb from '../Components/CustomNewsDumb';
import CustomNews from '../Components/CustomNews';
import Container from '../Components/Container';
import Home from '../Components/Home';

class Router extends Component {
    constructor(props) {
        super(props);
        this.state = {
            CustomNews: ["hellllo"],
            logedIn: false
        }
    }

    handleData(newdata) {
        this.setState(prevState => ({
            CustomNews: [...prevState.CustomNews, newdata]
        }));
    }

    render() {
        return (
            <BrowserRouter>
                <React.Fragment>
                    <Switch>
                        <Route path="/" render={()=><LogIn logedIn={this.state}/>} exact/>
                        <Route path="/Home" render={()=><Container><Home logedIn={this.state.logedIn}/></Container>} exact/>
                        <Route path="/Form" render={()=><Container><Form handlerFromParant={this.handleData.bind(this)}/></Container>} exact/>
                        {/* <Route path="/CustomNews" render={()=><Container render={()=><CustomNews data={this.state}/>}></Container>} exact/> */}
                        <Route path="/CustomNews" render={()=><Container><CustomNews data={this.state}/></Container>} exact/>
                    </Switch>
                </React.Fragment>
            </BrowserRouter>
        )
    }
}

export default Router