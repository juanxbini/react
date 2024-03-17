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

Para el temporizador Pomodoro, necesitamos inicializar el estado local en el constructor con valores para la hora y para la alerta (cuando el tiempo haya finalizado).

### Timer.js

```
constructor(){
    super();

    // Estado inicial.
    this.state = {

        alert: {
            type: '',
            message: ''
        },
        time: 0

    };
    // Definir tiempos de trabajo, pausa corta y pausa larga.
    this.time = {
        defaultTime: 1500, // 25 min
        shortBreak: 300, // 5 min
        longBreak: 900 // 15 min
    };
}

```
