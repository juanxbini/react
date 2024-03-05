import React, { Component } from 'react';
import './Home.css'

class Home extends Component {
    render() {
        return (
            <div className="Home">
                <h1> I'm Home Component </h1>
                <p>Visit my site: <a href="github.com/juanxbini">GitHub</a></p>
            </div>
        );
    }
}

export default Home;