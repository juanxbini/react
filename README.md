# CAPITULO 2

# El temporizador Pomodoro, implementación del constructor y de componentDidMount

Para comprender componentDidMount, vamos a crear un temporizador Pomodoro.

Vamos a comenzar creando una carpeta llamada Pomodoro en el directorio `components`, así como un archivo llamado Timer.js y el archivo Timer.css. Este es el esqueleto del componente de clase que utilizaremos:

#### Timer.js

```
import React, { Component } from 'react';
import './Timer';

class Timer extends Component {
    constructor(){
        super();

    };

    componentDidMount(){

    };

    render(){
        return (

            <div className="Pomodoro">
            
            </div>

        )
    };
}

export default Timer;

```

