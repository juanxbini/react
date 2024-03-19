import React, { Component } from 'react';
import './Timer.css';

class Timer extends Component {

    constructor(){
        super();

        this.state = {
            alert: {
                type: '',
                message: ''
            },
            time: 0
        }

        this.times = {
            defaultTime: 1500,
            shortBreak: 300,
            longBreak: 900
        }
    }

    componentDidMount(){
        // Seteamos el tiempo por defecto
        this.setDefaultTime();
    }

    setDefaultTime = () =>{
        // Actualizamos el estado con el tiempo por defecto.
        this.setState({
            time: this.times.defaultTime
        });
    }

    setTime = newTime => {
        // reiniciamos el intervalo
        this.restartInterval();
        
        // seteamos el nuevo tiempo correspondiente al tipo de timer elegido
        this.setState({
            time: newTime
        });
    }

    restartInterval = () => {
        // limpiamos el intervalo si existe
        clearInterval(this.interval);
    
        // seteamos un intervalo
        this.interval = setInterval(this.countDown, 1000);
    }

    countDown = () => {

        // Si time es 0 alertamos la finalizacion
        if(this.state.time === 0){
            this.setState({
                alert: {
                    type: 'buz',
                    message: 'BUZZ!!'
                }
            });
        } else {
            // sino descontamos 1 al tiempo actual
            this.setState({
                time: this.state.time - 1
            });
        }
    }
    
    setTimeForWork = () => {
        // Actualizamos el estado con la alerta correspondiente
        this.setState({
            alert: {
                type: 'start',
                message: 'Start Working!'
            }
        })
        // Seteamos el tipo de tiempo 
        this.setTime(this.times.defaultTime)
    }
    setTimeForShortBreak = () => {
        // Actualizamos el estado con la alerta correspondiente
        this.setState({
            alert: {
                type: 'short',
                message: 'Talking to the short break'
            }
        })
        // Seteamos el tipo de tiempo 
        this.setTime(this.times.shortBreak)
    }
    setTimeForLongBreak = () => {
        // Actualizamos el estado con la alerta correspondiente
        this.setState({
            alert: {
                type: 'long',
                message: 'Talking to the long break'
            }
        })
        // Seteamos el tipo de tiempo 
        this.setTime(this.times.longBreak)
    }

    displayTimer(seconds) {
        const m = Math.floor(seconds % 3600 / 60);
        const s = Math.floor(seconds % 3600 % 60);

        return `${m < 10 ? '0' : ''}${m}:${s < 10 ? '0' : ''}${s}`;
    }

    render(){

        const { alert: { type, message }, time} = this.state;

        return (
            <div className='Pomodoro'>
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
                        Start Working
                    </button>
                    <button
                        className='short'
                        onClick={this.setTimeForShortBreak}
                    >
                        Short Break
                    </button>
                    <button
                        className='long'
                        onClick={this.setTimeForLongBreak}
                    >
                        Long Break
                    </button>
                </div>
            </div>
        )
    }

}

export default Timer;