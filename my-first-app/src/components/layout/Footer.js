import React, { Component } from 'react';

class Footer extends Component {
    render(){
        return (
            <footer> &copy r4nel {(new Date()).getFullYear()}</footer>
        );
    }
}

export default Footer;
