import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';

class CustomNews extends Component {
    // const CustomNews = ({props}) => {
    //         return <div>

    //             {/* {props.data.map((news) => {
    //                 return <h1>hiii {news}</h1>
    //             })} */}
    //         </div>
    //     }
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return <div className="container">
            <div className="row">
                {this.props.data.CustomNews.map((news) => {
                    return <div className="card col-3">
                        <img className="card-img-top" src={news.ImgURL} alt="" />
                        <div className="card-body">
                            <h3 className="card-title">{news.Title}</h3>
                            <p className="card-text">{news.AuthorName}</p>
                        </div>
                    </div>
                })}
            </div>
        </div>
    }
}

export default CustomNews;