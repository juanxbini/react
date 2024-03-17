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
Después de definir el tiempo por defecto para el estado de time, veamos cómo tenemos que renderizar el temporizador Pomodoro. El método render debería ser así.

#### Time.js

```
render(){

    const { alert: { message, type }, time } = this.state;

    return(

        <div>
        
            <div className={`alert ${type}`}>
                {message}
            </div>

            <div className="timer">
                {this.displayTimer(time)}
            </div>

            <div className="type">

                <button
                    className="start"
                    onClick={this.setTimeForWork}
                    >
                    Start Working
                </button>
                <button
                    className="short"
                    onClick={this.setTimeForShortBreak}
                    >
                    Short Break
                </button>
                <button
                    className="long"
                    onClick={this.setTimeLongBreak}
                    >
                    Long Break
                </button>

            </div>
            
        </div>

    )

}

```
En este caso, JSX es muy sencillo. Obtenemos los valores del estado local(message, type, y time) y presentamos un `div` para mostrar la alerta cuando el usuario recibe un mensaje de alerta. Tiene otro `div` para mostrar el temporizador, que convertirá esos segundos al formato mm:ss. La última parte del diseño son los botones para seleccionar el tiempo del temporizador, y seguramente se ha notado que ejecuta diferentes métodos en el evento onClick para cada tipo de temporizador.

