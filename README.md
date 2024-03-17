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
Al método componentDidMount se recurre una vez que el componente está montado y se ejecuta una sola vez. En este caso, después de haber montado el componente, necesita actualizar el estado de time con el tiempo por defecto (25 min), y para ello necesita crear un nuevo método llamado setDefaultTime y, a continuación, ejecutarlo en el método componentDidMount.

#### Time.js

```
componentDidMount(){
    // Establece el tiempo con el que se monta el componente
    this.setDefaultTime();
}

setDefaultTime = () => {
    // El tiempo por defecto es de 25 min
    this.setState({
        time: this.time.defaultTime
    });
}

```
