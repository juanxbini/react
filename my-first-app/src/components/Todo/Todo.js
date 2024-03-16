import React, { Component } from 'react';
import './Todo.css';

class Todo extends Component {
    constructor(){
        super();
        // Estado inicial.
        this.state = {

            // Será el valor inicial del input.
            task : '',
            // Serán las tareas cargadas.
            items : []

        }

    }

    // MÉTODOS DE CICLO DE VIDA.

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

    // MANEJO DE EVENTOS.

    handleOnSubmit(){

        // Si task no está vacío.
        if(this.state.task.trim() !== '') {

            // Entonces actualizamos el estado.
            this.setState({
                // Vaciamos el valor actual de la tarea ingresada.
                task: '',
                items: [
                    // Cargamos los items anteriores.
                    ...this.state.items,
                    // Agregamos la nueva tarea ingresada.
                    {
                        id: uuidv4(),
                        task: this.state.task,
                        complete: false
                    }
                ]
            });

       }

    }

    handleOnChange = e => {
        // Accedemos al valor de entrada.
       const { target: { value }} = e;

       // Actualizamos el estado con el valor de entrada.
       this.setState({
            task: value
       });
    }

    // FUNCIONALIDADES.

    markAsCompleted(){

    }
    removeTask(){

    }

    // RENDERIZADO.

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

export default Todo;