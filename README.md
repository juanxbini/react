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

#### Timer.js

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

#### Timer.js

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

`setTimeForWork`, `setTimeforShortBreak` y `setTimeForLongBreak`: El propósito de estas tres funciones es actualizar el mensaje de alerta dependiendo el tipo de temporización. Luego recurrir a una función estándar llamada `setTime`, pasando como parámetro el tiempo específico para cada opción.

### Timer.js

```
setTimeForWork = () => {

    this.setState({
        alert: {
            type: 'work',
            message: 'Working!'
        }
    })

    return this.setTime(this.times.defaultTime);
}
setTimeForShortBreak = () => {

    this.setState({
        alert: {
            type: 'shortBreak',
            message: 'Talking a Short Break!'
        }
    })

    return this.setTime(this.time.shortBreak);
}
setTimeForLongBreak = () => {

    this.setState({
        alert: {
            type: 'LongBreak',
            message: 'Taking a Short Break!'
        }
    })

    return this.setTime(this.time.longBreak);
}

```

Como ya sabemos, cuando especificamos métodos con funciones flecha en la clase, se vinculan automáticamente. Eso significa que no tiene que vincularlos al constructor. Ahora crearemos el metodo setTime.

#### Timer.js

```
setTime = newTime => {
    this.restartInterval();

    this.setState({
        time: newTime
    });
}

```
Como puede ver, ejecuta un método llamado `restartInterval()` y se actualiza el estado local con la variable newTime, que pasa como parámetro. Seguramente ha notado, por el nombre de la función, que va a usar una función `setInterval`, que se utiliza para recurrir a la funcion cada x milisiegundos. La función `restartInterval()` debería verse así:

#### Timer.js

```
restartInterval = () => {
    // Borra el intervalo
    clearInterval(this.interval);

    // Ejecuta la función countDown.
    this.interval = setInterval(this.countDown, 1000);
}

```

En este caso, primero borramos el intervalo `clearInterval(this.interval)`. Esto se debe a que el usuario puede cambiar entre los diferentes tipos de temporización, por lo que necesita borrar el intervalo cada vez que configura un nuevo temporizador. Después de borrar el intervalo, llama a la función `countDown`. La función `countDonw` es como sigue:

#### Timer.js

```
countDown = () => {
    // Si el tiempo llega a cero, se muestra la alerta buzz
    if(this.state.time === 0){
        this.setState({
            alert: {
                type: 'buzz',
                message: 'Buuzzzzz!'
            }
        })
    } else {
        // Descuente el tiempo segundo a segundo
        this.setState({
            time: this.state.time - 1
        });

    }
}

```
La última pieza de este rompecabezas es la función `displayTimer`, que convertirá el tiempo al formato mm:ss y lo presentará al componente.

#### Timer.js

```

displayTimer(seconds) {
    // Formatee el tiempo a mm:ss
    const m = Math.floor(seconds % 3600 / 60);
    const s = Math.floor(seconds % 3600 % 60);
    return `${m < 10 ? '0' : ''}${m}:${s < 10 ? '0' : ''}${s}`
}

```

Así debería de verse el componente completo:

```
import React, { Component } form 'react';

class Timer extends Component {

    constructor(){
        super();

        this.state = {

            alert: {
                type: '',
                message: ''
            },

            time: 0
        };

        this.time = {
            defaultTime: 1500,
            shortBreak: 300,
            longBreak: 900
        };

    }

    componentDidMount(){
        this.setDefaultTime();
    }

    setDefaultTime = () => {
        this.setState({
            time: this.time.defaultTime
        })
    }

    setTime = newTime => {
        this.restartInterval()

        this.setState({
            time: newTime
        })
    }

    restartInterval = () => {
        clearInterval(this.interval)
        this.interval = setInterval(this.countDown, 1000);
    }

    countDown = () => {

        if(this.state.time === 0){

            this.setState({
                alert: {
                    type:  'buz',
                    message: 'BUZZ!'
                }
            })

        } else {

            this.setState({
                this.setState({
                    time: this.state.time - 1
                })
            });

        }

    }

    setTimeForWork = () => {
        this.setState({
            alert: {
                type: 'work',
                message: 'working!'
            }
        })
        return setTime({this.times.defaultTime})
    }

    setTimeShortBreak = () => {
        this.setState({
            alert: {
                type: 'short',
                message: 'Talking a short break'
            }
        })
        return setTime({this.times.shortBreak})
    }

    setTimeLongBreak = () => {
        this.setState({
            alert: {
                type: 'long',
                message: 'Talking a long break'
            }
        })
        return setTime({this.times.longBreak})
    }

    displayTimer(seconds) {
        const m = Math.floor(seconds % 3600 / 60);
        const s = Math.floor(seconds % 3600 % 60);

        return `${m < 10 ? '0' : ''}${m}:${s < 10 ? '0' : ''}${s}`;
    }
 
    render(){

        const { alert: {message, type}, time} = this.state;

        return (

            <div>
                <div className={`alert ${type}`}>
                    {message}
                </div>
                <div className='timer'>
                    {this.displayTimer(time)}
                </div>
                <div className='type'>
                    
                    <button
                        className='start'
                        onClick={this.setTimeForWork}
                        >
                        
                    </button>
                    <button
                        className='short'
                        onClick={this.setTimeShortBreak}
                        >

                    </button>
                    <button
                        className='long'
                        onClick={this.setTimeLongBreak}
                        >
                    
                    </button>

                </div>
            </div>

        )
    }

}

```

