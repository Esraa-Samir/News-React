import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: null
        }
    }
    componentDidMount() {
        fetch('https://newsapi.org/v2/everything?q=bitcoin&from=2019-03-21&sortBy=publishedAt&apiKey=7d2eccb503074dc5b44f1abcd3ae2e0d')
            .then(response => (response).json())
            .then(data => this.setState({ data: data }));
    }

    render() {       
        if(this.props.logedIn === false) {
            return <h1>Please, Log in to view news</h1>
        }
        else{
        return <div className="container">
            <div className="row">
                {this.props.logedIn && this.state.data && this.state.data.articles.map((news) => {
                    return <div className="card col-3">
                        <img className="card-img-top" src={news.urlToImage} alt="" />
                        <div className="card-body">
                            <a href={news.url} className="card-title">{news.title}</a>
                            <p className="card-text">{news.author}</p>
                        </div>
                    </div>
                })}
            </div>
        </div>
        }
    }
}

export default Home;