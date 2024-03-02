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

# Como hacerlo ...

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