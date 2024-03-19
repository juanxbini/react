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

    render(){
        return (
            <div className='Pomodoro'>
                <div className={`alert ${type}`}>
                    {message}
                </div>
                <div className='timer'>
                    {}
                </div>
                <div className='type'>
                    <button
                        className='start'
                        onClick={''}
                    >
                        Start Working
                    </button>
                    <button
                        className='short'
                        onClick={''}
                    >
                        Short Break
                    </button>
                    <button
                        className='long'
                        onClick={''}
                    >
                        Long Break
                    </button>
                </div>
            </div>
        )
    }

}

export default Timer;