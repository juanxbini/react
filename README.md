> En esta sección del Capitulo 2 actualizaremos la rama cap2_ciclo_vida con contenido relacionado a React Hooks. Como mencionamos en esa rama, vamos a rehacer lo que hicimos con el método de ciclo de vida ComponentWillMount, utilizando React Hooks.

# Capitulo 2: Lista de tareas implementando React Hooks.

## Introducción a React Hooks y su uso.

React Hooks es una característica introducida en versiones más recientes de React que proporciona una manera más simple y eficiente de manejar el estado y otros aspectos del ciclo de vida en los componentes funcionales. Antes de la introducción de React Hooks, los componentes funcionales estaban limitados en cuanto a cómo podían manejar el estado y realizar efectos secundarios. Con React Hooks, los desarrolladores pueden utilizar el estado y otras características de React en componentes funcionales sin necesidad de convertirlos en clases.

Los Hooks son funciones que te permiten "enganchar" el estado de React y otras características en componentes funcionales. Algunos de los Hooks más comunes son **useState**, **useEffect**, **useContext**, entre otros.

La sintaxis de los Hooks es bastante simple. Para usar un Hook, simplemente importas la función correspondiente desde React y la llamas dentro de tu componente funcional. Por ejemplo, **useState** se utiliza para agregar estado a un componente funcional.

```
import React, { useState } from 'react';

function Example() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}

```

En este ejemplo, **useState** retorna un array con dos elementos: el estado actual y una función para actualizarlo. Luego, puedes usar **count** para acceder al estado actual y **setCount** para actualizarlo.

**useEffect** es otro Hook importante que se utiliza para realizar efectos secundarios en componentes funcionales, como la inicialización de datos, la suscripción a eventos, etc. La sintaxis general de **useEffect** es la siguiente:

```
useEffect(() => {
  // Código para realizar efectos secundarios
}, [dependencias]);

```
El primer argumento de **useEffect** es una función que contiene el código para realizar los efectos secundarios. Este código se ejecutará después de que el componente se monte en el DOM y después de cada renderizado. El segundo argumento de **useEffect** es un array opcional de dependencias. Si se proporciona, el efecto solo se volverá a ejecutar si alguna de las dependencias ha cambiado desde la última ejecución. Si se omite, el efecto se ejecutará después de cada renderizado.

**useContext** es otro Hook que se utiliza para acceder al contexto en componentes funcionales.

## Lista de tareas.

Ahora exploraremos cómo crear una lista de tareas utilizando React Hooks en lugar de los métodos de ciclo de vida obsoletos. Utilizaremos **useState** para manejar el estado y **useEffect** para realizar efectos secundarios en nuestro componente funcional.

Primero, necesitaremos crear un nuevo componente llamado Todo en la carpeta Components. Este componente contendrá la lógica para manejar las tareas.

```
import List from './List.js';
import React, { useState, useEffect } from 'react'; // Importamos React y los Hooks useState y useEffect desde la biblioteca de React
import './Todo.css'; // Importamos el archivo CSS para estilizar nuestro componente

const TodoList = () => { // Definimos nuestro componente funcional TodoList
  const [task, setTask] = useState(''); // Definimos el estado 'task' y la función 'setTask' para actualizarlo
  const [items, setItems] = useState([]); // Definimos el estado 'items' y la función 'setItems' para actualizarlo

  useEffect(() => { // Utilizamos useEffect para establecer un estado por defecto
    setItems([ // Definimos el estado por defecto dentro de useEffect
      {
        id: uuidv4(),
        task: 'Pay the rent',
        completed: false
      },
      {
        id: uuidv4(),
        task: 'Go to the gym',
        completed: false
      },
      {
        id: uuidv4(),
        task: 'Do my homework',
        completed: false
      }
    ]);
  }, []); // El segundo argumento del useEffect es un array vacío, indicando que solo se debe ejecutar una vez

  const handleOnChange = e => { // Definimos una función para manejar cambios en el input de la tarea
    const { value } = e.target; // Obtenemos el valor del input
    setTask(value); // Actualizamos el estado 'task' con el nuevo valor
  };

  const handleOnSubmit = e => { // Definimos una función para manejar el envío del formulario
    e.preventDefault(); // Prevenimos el comportamiento por defecto del formulario
    if (task.trim() !== '') { // Verificamos si la tarea no está vacía
      setItems([...items, { id: uuidv4(), task: task, completed: false }]); // Actualizamos el estado 'items' añadiendo una nueva tarea
      setTask(''); // Reseteamos el estado 'task' a una cadena vacía
    }
  };

  const markAsCompleted = id => { // Definimos una función para marcar una tarea como completada
    setItems( // Actualizamos el estado 'items'
      items.map(item => // Mapeamos sobre las tareas
        item.id === id ? { ...item, completed: true } : item // Si encontramos la tarea con el ID correspondiente, marcamos como completada
      )
    );
  };

  const removeTask = id => { // Definimos una función para eliminar una tarea
    setItems(items.filter(item => item.id !== id)); // Filtramos las tareas para eliminar la tarea con el ID correspondiente
  };

  return ( // Retornamos la estructura JSX del componente TodoList
    <div className="Todo"> {/* Div contenedor con clase Todo */}
      <h1>New Task:</h1> {/* Encabezado */}
      <form onSubmit={handleOnSubmit}> {/* Formulario para agregar nuevas tareas */}
        <input value={task} onChange={handleOnChange} /> {/* Input para ingresar nuevas tareas */}
      </form>
      <List items={items} markAsCompleted={markAsCompleted} removeTask={removeTask} /> {/* Renderizamos el componente List y pasamos las props necesarias */}
    </div>
  );
};

export default TodoList; // Exportamos el componente TodoList

```

En este código, hemos envuelto la inicialización del estado dentro de un efecto de lado (side effect) usando **useEffect**. Al pasar un array vacío como segundo argumento de **useEffect**, nos aseguramos de que este efecto solo se ejecute una vez, cuando el componente se monta por primera vez en el DOM, lo que es equivalente al comportamiento del método componentWillMount.