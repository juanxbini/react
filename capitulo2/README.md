# Como dominar los componentes y JSX

En este capitulo de trataran los siguientes temas:

- Creación del primer componente de React. Organización de aplicaciones de React.
- Estilización de componentes con clases CSS y estilos en linea.
- Paso de props a componentes y su validación con PropTypes.
- Uso del estado local en componentes.
- Creación de componentes funcionales o apátridas. Asimilación de los métodos de ciclo de vida de React. Asimilación de los componentes puros de react.
- Prevención de las vulnerabilidades de xss.

## Preparación 

- Instalar node: **npm install node**
- Instalamos create-react-app: **npm install -g create-react-app**
- Crear aplicación: **create-react-app my-first-app**

## Estructura inicial de un componente

´´´ 
import React, { Component } from 'react';

class Home extends Component {
    render(){
        return <h1> I'm Home Component </h1>
    }
}

export default Home;
´´´
