# CAPITULO 2

# Como dominar los componentes y JSX

En este capitulo de trataran los siguientes temas:

- Creación del primer componente de React. Organización de aplicaciones de React.
- Estilización de componentes con clases CSS y estilos en linea.
- Paso de props a componentes y su validación con PropTypes.
- Uso del estado local en componentes.
- Creación de componentes funcionales o apátridas. Asimilación de los métodos de ciclo de vida de React. Asimilación de los componentes puros de react.
- Prevención de las vulnerabilidades de xss.

## Preparación 

- Si no está instalado, instalar node: 
`npm install node`
- Iniciar node: 
`npm init`
- Instalamos create-react-app: 
`npm install -g create-react-app`
- Crear aplicación: 
`create-react-app my-first-app`

## Estructura inicial de un componente


``` import React, { Component } from 'react'; 

class Home extends Component {
    render(){
        return <h1> I'm Home Component </h1>
    }
}

export default Home;
```
## Renderizar Componente

Dentro del archivo App.js importaremos el componente Home y luego añadiremos en el metodo render el componente importado.

#### App.js
```
import React, { Component } from 'React';
import logo from './logo.svg';

// importamos aqui el componente Home
import Home from './Home';
import 'App.css';

class App extends Component {
    render(){
        return (
            <div className='App'>
                <header className='App-header>
                ...
                </header>
                // Aqui añadimos el componente
                <Home />
            </div>
        )
    }
}
export default App;
```
# La organización de aplicaciones React

Cuando creamos la aplicación React, viene por defecto organizado. Vamos a hacer algunas modificaciones: 

- Creamos los directorios src/components y src/shared
- A continuación creamos el directorio src/components/Home y movemos el archivo Home.js a esta carpeta.
- Los archivos App.js, App.css y App.test.js se quedarán en el nivel src/components.
- Movemos el archivo logo.svg a src/shared/images
- Por ultimo, index.js lo dejamos en src.

# Estilización de componentes con clases CSS y estilos en linea.

En React, una de las mejores practicas es que el estilo y el componente compartan el mismo directorio. React utiliza Webpack, el empaquetador de modulos mas popular en la actualidad. Con Webpack podes configurar de que forma quiere tratar los estilos (utilizando directamente css o un preprocesador de estilos CSS como Sass, Stylus o Less CSS), y con Webpack puede implementar modulos CSS. Esta es una forma eficaz de evitar los tres grandes problemas de CSS.

- Ausencia de conflicos (sobreescritura involuntaria).
- Dependencias explícitas (estilos por componentes).
- No tiene alcance global.

En el capitulo 10, Dominio de webpack, se describira Webpack e implementaremos modulos CSS utilizando Sass o Stylus.

## Como hacerlo ...

A continuación crearemos un nuevo archivo CSS llamado Home.css al mismo nivel que el archivo Home.js (src/components/home).


> Algunas diferencias más importantes entre JSX y HTML, son los nombres de los atributos. En JSX en vez de class como en HTML, utilizaremos className como atributo.


Dentro de Home.js modificaremos algunas lineas. Primero importaremos el archivo Home.css y luego agregamos una etiqueta p con una descripcion y un enlace a. Para finalizar un div con la clase Home que contenga al h1 y a p:

#### Home.js

``` 
import React, { Component } from 'react'; 
import './Home.css';

class Home extends Component {
    render(){
        return (
            <div className="Home">
                <h1> I'm Home Component </h1>
                <p>Visit my site: <a href="github.com/juanxbini">GitHub</a></p>
            </div>
            );
    }
}

export default Home;
```
Ahora añadiremos estilos a Home.css:

#### Home.css

```
.Home{
    margin: 0 auto;
    width: 960px;
}

.Home h1{
    font-size: 32px;
    color: #333;
}

.Home p{
    color: #333,
    text-align: center;
}
.Home a{
    color: #56D5FA;
    text-decoration: none;
}
.Home a:hover{
    color: #333;
}

```
# Paso de props a componentes y su validación con PropTypes

Como en cualquier aplicación, necesitas enviar información (vía props) a distintos elementos. A continuación vamos a crear nuevos componentes: Header, Content y Footer (se agruparán en una carpeta shared/components/layout), enviaremos algunos props y los validaremos con PropTypes.

Antes de continuar, debemos instalar el paquete de PropTypes para poder utilizar la validación.

`npm install prop-types`

PropTypes se utiliza para documentar o definir los tipos de propiedades que pretende transmitir a los componentes.

#### Header.js

```
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import logo from '../../images/logo.svg';

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
                    <img src={logo} className="App-logo" alt="logo />
                </a>
                <h1 className="App-title">{title}</h1>
            </header>
        );
    }

}
export default Header;
```
La propiedad Static de PropTypes es básicamente un objeto en el que necesita definir el tipo de prop que pasará. Array, bool, func, number, object, string y symbol son tipos primitivos, pero hay también tipor particulares, como node, element, instanceOf, arrayOf, entre otros. La propiedad isRequired es opcional, y se puede añadir a cualquier tipo de prop si éste es obligatorio. React presentará un advertencia si éste no está definido.

#### App.js

```
import React, { Component } from 'React';
import logo from './logo.svg';

import Home from './Home';
// Aqui importamos el componente Header.
import Header from '../shared/components/layout/Header'
import 'App.css';

class App extends Component {
    render(){
        return (
            <div className='App'>
                // Aquí añadimos el componente Header.
                <Header title="Welcome to ReactApp by juanxbini"
                <Home />
            </div>
        )
    }
}
export default App;
```
Todas las propiedades pasadas a los componentes están contenidas en estos props. Solamente envié el prop title dado que es el unico obligatorio. El resto será completado con los props asignados por defecto anteriormente.

A continuación crearemos el componente footer.

#### footer.js

```
import React, { Componente } from 'react';

class Footer extends Component {
    render(){
        return (
            <footer> &copy r4nel {(new Date()).getFullYear()}</footer>
        );
    }
}

export default Footer;

```
## Pasar props como hijos

Hasta ahora hemos pasado props como atributos (con componentes de cierre automático `<Component />`), pero hay otra forma de pasar props como hijos (`<Component> Children Content </Component>`). Crearemos el componente Content y enviaremos el componente Home como hijo de Content.

```
import React, { Component } from  'react';
import PropTypes from 'prop-types';

class Content extends Component{
    static propTypes = {
        children: PropTypes.element.isRequired;
    }
    render(){
        const { children } = this.props;
        return(
            <main>
                {children}
            </main>
        );
    }
}

export Content;

```
Con estos cambios App.js debería verse de la siguiente forma.

#### App.js

```
import React, { Component } from 'React';
import logo from './logo.svg';

import Home from './Home';
// Aqui importamos el componente Header.
import Header from '../shared/components/layout/Header'
import 'App.css';

class App extends Component {
    render(){
        return (
            <div className='App'>
                // Aquí añadimos el componente Header.
                <Header title="Welcome to ReactApp by juanxbini" />

                <Content>
                    <Home />
                </Content>
                <Footer />
            </div>
        )
    }
}
export default App;

```
