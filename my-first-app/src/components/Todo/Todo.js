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

        setItems(
            {
                id: uuidv4(),
                task: 'Pay de Rent',
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
        )

    }, []);

    // MANEJO DE EVENTOS.

    // Función para manejar cambios en el input de la tarea.
    const handleOnChange = e => {
        // Obtenemos el valor del input.
        const { value } = e.target;
        // Actualizamos el estado de task.
        setTask(value);

    };
    // Función para manejar el envío del formulario.
    const handleOnSubmit = e => {
        // Prevenimos el envío del formulario.
        e.preventDeafault();

        // Verificamos si la tarea no está vacía.
        if(task.trim() !== ''){
            // Agregamos la nueva tarea al estado.
            setItems([...items,{ id: uuidv4(), task: task, completed: false }])
            // Vaciamos el input
            setTask('')
        }

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

            <form onSubmit={handleOnSubmit}>

                <input
                    value={this.state.task}
                    onChange={handleOnChange}
                />

            </form>

            <List
                items={state.items}
                markAsCompleted={markAsCompleted}
                removeTask={removeTask}
            />
        </div>
    )

}


export default Todo;