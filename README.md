# CAPITULO 2

# Creación de componentes funcionales o apátridas

Hasta ahora, hemos aprendido a crear en React solamente componentes de clase. Estos componentes son útiles cuando se necesita gestionar el estado local, pero, en algunos casos, neceistaremos renderizar marcado estático. Para componentes estáticos tendremos que utilizar componentes funcionales, también conocidos como apátridas.

A continuación, modificaremos algunos componentes estáticos que hemos creado anteriormente.

#### Header.js

```
import React from 'react';
import PropTypes from 'prop-types';
import logo from '../../images/logo.svg';

// Creamos un componente con una sencilla funcion flecha
const Header = props => {
    const {
        title = 'Welcome to React',
        url = 'http://localhost:3000'
    } = props;

    return (
        <header className="App-header">
            <a href={url}>
                <img src={logo} className="App-logo" alt="logo" />
            </a>
            <h1 className="App-title">{title}</h1>
    );
};

Header.propTypes = {
    title: PropTypes.string.isRequired,
    url: PropTypes.string
};

export default Header;
```

> Un componente funcional es equivalente a tener solo el método de renderizado. Por eso solo tiene que devolver directamente el JSX.

Luego de migrar el componente Header, migrará el componente Footer.

#### Footer.js

```
import React, { Component } from 'react';

// Como no tiene props, solamente devolveremos el JSX
const Footer = () => (
    <footer>&copy r4nel {(new Date()).getFullYear()}</footer>
);

export default Footer;
```

> En este caso, como podemos ver, necesitamos crear una función flecha sin parámtros(porque no tiene props) y devolver directamente el JSX que necesitamos renderizar.

Por ultimo, convertiremos el componente Content en un componente funcional.

#### Content.js

```
import React from 'react';
import PropTypes from 'prop-types';

const Content = props => {
    const { children } = props;
    
    return (
        <main>
            {children}
        </main>
    );
};

Content.propTypes = {
    children: PropTypes.element.isRequired;
};

export default Content;
```

> Un componente funcional no solo no tiene estado, sino que tampoco tiene los métodos de ciclo de vida de React. De todas maneras, a continuación veremos React Hooks, que nos ayudara manipular el ciclo de vida de React y el estado local en componentes funcionales.

