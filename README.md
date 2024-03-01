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