import React from 'react';
import PropTypes from 'prop-types';
import logo from '../../shared/images/logo.svg';

const Header = props => {

 // Destructuramos las props enviadas.
    const {
        title = 'Welcome to React',
        url = 'http://localhost:3000'
    } = props;

    // Retornamos el JSX
    return (
        <header className='App-header'>
            <a href={url}>
                <img src={logo} className='App-logo' alt='logo' />
            </a>
            <h1 className='App-title'>{title}</h1>
        </header>
    )
}
// Definir props 
Header.protoTypes = {

    title: PropTypes.string.isRequired,
    url: PropTypes.string

};

export default Header;