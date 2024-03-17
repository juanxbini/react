import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import List from './List'
import './Todo.css';

const Todo = () => {

    // ESTADO.

    // Definimos el estado 'task' y la función 'setTask' para actualizarlo.
    const [task, setTask] = useState('');

    //Definimos el estado 'items' y la función 'setItems' para actualizarlo.
    const [items, setItems] = useState([]);

    // Establecemos el estado inicial.
    useEffect( () => {

    }, []);

    // MANEJO DE EVENTOS.

    // Función para manejar cambios en el input de la tarea.
    const handleOnChange = () => {

    };
    // Función para manejar el envío del formulario.
    const handleOnSubmit = () => {

    };

    // FUNCIONALIDADES

    // Función para marcar una tarea como completada.
    const markAsCompleted = id => {

    };
    // Funcion para eliminar una tarea.
    const removeTask = id => {

    };

    // RENDERIZADO.

    return (
        <div className='Todo'>
            <h1>New Task:</h1>

            <form onSubmit={this.handleOnSubmit}>

                <input
                    value={this.state.task}
                    onChange={this.handleOnChange}
                />

            </form>

            <List
                items={this.state.items}
                markAsCompleted={this.markAsCompleted}
                removeTask={this.removeTask}
            />
        </div>
    )

}


export default Todo;