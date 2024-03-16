import React, { Component } from 'react';
import './Todo.css';

class Todo extends Component {
    constructor(){
        super();
        // Estado inicial
        this.state = {
            task : '',
            items : []
        }

    }
    // Metodos de ciclo de vida
    componentDidMount(){

        this.setState({
            items: [
                {
                   id: uuidv4(),
                   task: 'Pay the rent',
                   completed: false
                },
                {
                    id: uuidv4(),
                    task: 'Go to the gym!',
                    completed: false
                },
                {
                    id: uuidv4(),
                    task: 'Do my homework',
                    completed: false
                }
            ]
        })

    }

    // Manejador de eventos
    handleOnSubmit(){

    }
    handleOnChange(){

    }

    // Funcionalidades
    markAsCompleted(){

    }
    removeTask(){

    }

    render(){
        return (
            <div className='Todo'>
                <h1>New Task:</h1>

                <form onSubmit={this.handleOnSubmit}>

                    <input  
                        value={this.state.items}
                        onChange={this.handleOnChange}
                    />

                </form>

                <List 
                    items = {this.state.items}
                    markAsCompleted = {this.markAsCompleted}
                    removeTask = {this.removeTask}
                    />
            </div>
        )
    }
}