import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navigation extends Component {
    render() {
        return (
            <div>
                <ul>
                    <li>
                        <Link to="/Home">Home</Link>
                    </li>
                    <li>
                        <Link to="/Form">Form</Link>
                    </li>
                    <li>
                        <Link to="/CustomNews">Custom News</Link>
                    </li>
                </ul>

            </div>

        )
    }
}

export default Navigation;
