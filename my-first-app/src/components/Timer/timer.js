import React, { Component } from 'react';
import './Timer.css';

class Timer extends Component {

    constructor(){
        super();

        this.state = {

        }
        this.times = {
            defaultTime: 1500,
            shortBreak: 300,
            longBreak: 900
        }
    }

    componentDidMount(){
        this.setDefaultTime();
    }

    setDefaultTime = () =>{
        this.setState({
            time: this.times.defaultTime
        });
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