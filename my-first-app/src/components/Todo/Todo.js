import List from './List'
import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './Todo.css';

const Todo = () => {

    // ESTADO.

    // Definimos el estado 'task' y la función 'setTask' para actualizarlo.
    const [task, setTask] = useState('');

    //Definimos el estado 'items' y la función 'setItems' para actualizarlo.
    const [items, setItems] = useState([]);

    // Establecemos el estado inicial.
    useEffect( () => {
        
        setItems([
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
        ]);
        
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
        setItems(

            /**  
            * Map es un método de los arrays.
            * Devuelve un nuevo arreglo con cada elemento transformado
            * según la función que se pasa como argumento.
            **/
            items.map( item => 

                /**
                 * Verifica si el'id' del emento actual 
                 * coincide con el id pasado como parámetro.
                 * Si esto es asi crea un nuevo objeto 
                 * {...item, completed: true} que es una copia del 
                 * elemento actual('item') con la propiedad complete como true.
                 * Si no coincide, simplemente devuelve el mismo elemento 'item'.
                 * 
                 * {...item, completed: true}: Spread Syntax. 
                 * Crea una copia del elemento original en otro objeto. Se copian
                 * todas las propiedades y si estas propiedades se modifican en la 
                 * copia, tambien se modifican en el original.
                 * Entonces crea un objeto que es una copia de 'item' original, pero
                 * con la propiedad 'completed' establecida en 'true.
                 *  */ 
                item.id === id ? {...item, completed: true} : item)
        );
    };
    // Funcion para eliminar una tarea.
    const removeTask = id => {

        setItems(
            // Filtramos el elemento que queremos eliminar
            items.filter( item => item.id !== id)
        )

    };

    // RENDERIZADO.

    return (
        <div className='Todo'>
            <h1>New Task:</h1>

            <form onSubmit={handleOnSubmit}>

                <input
                    value={task}
                    onChange={handleOnChange}
                />

            </form>

            <List
                items={items}
                markAsCompleted={markAsCompleted}
                removeTask={removeTask}
            />
        </div>
    )

}


export default Todo;