import React, { Component } from 'react';
import PropTypes from 'prop-types';
import logo from '../../shared/images/logo.svg';

class Header extends Component {

    // Aquí puede definir los PropTypes
    static propTypes = {
        title: PropTypes.string.isRequired,
        url: PropTypes.string
    };
    render(){
        /* Aquí en la desestructuración definimos los valores de props por defecto,
        aunque title tendremos que pasarlo si o si dada su propiedad isRequired. */
        const {
            title = 'Welcome to React',
            url = 'http://localhost:3000'
        } = this.props;
        return (
            <header className="App-header">
                <a href={url}>
                    <img src={logo} className="App-logo" alt="logo" />
                </a>
                <h1 className="App-title">{title}</h1>
            </header>
        );
    }

}
export default Header;