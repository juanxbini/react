# CAPITULO 2

# Creación de componentes funcionales o apátridas

Hasta ahora, hemos aprendido a crear en React solamente componentes de clase. Estos componentes son útiles cuando se necesita gestionar el estado local, pero, en algunos casos, neceistaremos renderizar marcado estático. Para componentes estáticos tendremos que utilizar componentes funcionales, también conocidos como apátridas.

A continuación, modificaremos algunos componentes estáticos que hemos creado anteriormente.

#### Header.js

```
import React from 'react';
import PropTypes from 'prop-types';
import logo from '../../images/logo.svg';

// Creamos un componente con una sencilla funcion flecha
const Header = props => {
    const {
        title = 'Welcome to React',
        url = 'http://localhost:3000'
    } = props;

    return (
        <header className="App-header">
            <a href={url}>
                <img src={logo} className="App-logo" alt="logo" />
            </a>
            <h1 className="App-title">{title}</h1>
    );
};

Header.propTypes = {
    title: PropTypes.string.isRequired,
    url: PropTypes.string
};

export default Header;
```

> Un componente funcional es equivalente a tener solo el método de renderizado. Por eso solo tiene que devolver directamente el JSX.


Luego de migrar el componente Header, migrará el componente Footer.

#### Footer.js

```
import React, { Component } from 'react';

// Como no tiene props, solamente devolveremos el JSX
const Footer = () => (
    <footer>&copy r4nel {(new Date()).getFullYear()}</footer>
);

export default Footer;
```

> En este caso, como podemos ver, necesitamos crear una función flecha sin parámtros(porque no tiene props) y devolver directamente el JSX que necesitamos renderizar.


Por ultimo, convertiremos el componente Content en un componente funcional.

#### Content.js

```
import React from 'react';
import PropTypes from 'prop-types';

const Content = props => {
    const { children } = props;
    
    return (
        <main>
            {children}
        </main>
    );
};

Content.propTypes = {
    children: PropTypes.element.isRequired;
};

export default Content;
```

> Un componente funcional no solo no tiene estado, sino que tampoco tiene los métodos de ciclo de vida de React. De todas maneras, a continuación veremos React Hooks, que nos ayudara manipular el ciclo de vida de React y el estado local en componentes funcionales.


# Asimilación de los métodos de ciclo de vida de React

> En esta sección del capitulo 2 véremos temas ya obsoletos, que fueron reemplazados por otras funcionalidades, como es el caso de los métodos de ciclo de vida. En las versiones más recientes se comienza a utilizar lo que llamamos React Hooks. De todas maneras redactaremos los temas antiguos y en otra rama del repositorio mostraremos el mismo tema pero actualizado con React Hooks.


React proporciona métodos para tratar los datos durante el ciclo de vida del componente. Esta posibilidad es muy útil cuando necesitamos actualizar la aplicación en determinados momentos.

En esta sección explicaremos cada ejemplo de forma independiente.

## Lista de tareas, implementación de ComponentWillMount

En esta receta, veremos los métodos de ciclo de vida de React. Veremos cómo fluye información a través de los métodos, desde que el componente está premontado, pasando por cuando está montado, hasta que está desmontado.

Para esta lista de tareas necesitamos crear una nueva carpeta llamada Todo en el directorio Components, y necesita crear los archivos Todo.js y Todo.css. Este es el esqueleto de Todo:

#### Todo.js

```
import React, { Component } from 'react';
import './Todo.css';

class Todo extends Component {
    constructor() {
        super();

    }
    
    componentWillMount(){
 
    }

    render(){
        return (
            <div className="Todo">
                <h1> New Task: </h1>
            </div>
        );
    }
}

export default Todo;

```

El **constructor** es un método único que se ejecuta antes de que se inicialice el objeto. El constructor puede usar la palabra clave super para recurrir al constructor de la superclase (clase padre). Este método se utiliza para inicializar el estado local o para unir métodos. Para la lista de tareas, necesita inicializar el estado local en el constructor con algunos valores de las tasks (tareas) y de los items (elementos) de la matriz.

### Todo.js

```
constructor(){
    super();

    //Estado inicial...
    this.state = {
        task= '',
        items: []
    };
}

```

El método **componentWillMount()** se ejecuta una sola vez antes de montar el componente. En este caso, antes de montarlo, necesita actualizar el estado de los items con las tareas por defecto.

```
componentWillMount() {
    this.setState({
        items: [
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
        ]
    });
}

```

Utilizaremos **uuidv4** para generar ID aleatorios. Para instalareste paquete, necesitamos ejecutar el siguiente comando: 

`npm install uuid` 

Luego importarlo del siguiente modo: 

`import uuidv4 from 'uuid/4'`


> La implementación de uuidv4 puede varirar según las versiones actuales. Recomendamos revisar la documentación correspondiente.


Después de haber definido las tareas por defecto, veamos cómo hay que renderizar la lista de tareas:

#### Todo.js

```
render() {
    return (
        <div className="Todo">
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

    );
}

```

El JSX se divide en dos partes. La primera es un formulario con una entrada que está conectada al estado local(this.state.task), y guardará la tarea cuando el usuario envíe el formulario (onSubmit). La segunda parte es la lista de componentes en la que va a mostrar la lista de tareas, pasando la matriz de elementos y las funciones markAsCompleted (para marcar una tarea completada) y removeTask (para eliminar una tarea de la lista).

El método **handleOnChange** se utiliza para conectar el valor de la entrada con el estado de la tarea:

#### Todo.js

```
handleOnChange = e => {
    const { target: { value } } = e;

    // Se actualiza el estado con el valor de entrada...
    this.setState({
        task: value
    });
}

```

El método **handleOnSubmit** es para actualizar el estado de items y enviar la nueva tarea a la matriz.

#### Todo.js

```
handleOnSubmit = e => {
    // Con preventDefault se evita el envio del formulario...
    e.preventDefault()

    // Una vez enviado, restablece el valor de la tarea y
    // añade la nueva tarea a la matriz de elementos
    if(this.state.task.trim() !== '') {
        this.setState({
            task = '',
            items: [
                ...this.state.items,
                {
                    id: uuidv4(),
                    task: this.state.task,
                    complete: false
                }
            ]
        });
    }
}

```

Las función **markAsCompleted** va a ser requerida por el componente List y necesita recibir el id de la tarea que quiere marcar como completada. Con este, puede encontrar la tarea específica en la matriz ítems, modificar el nodo como completado, y después actualizar el estado local:

#### Todo.js

```
markAsCompleted = id => {
    // Encuentre la tarea por el id..
    const foundTask = this.state.items.find(
        task => tast.id == id
    );

    // Se actualiza el estado completado...
    foundTask.completed = true;

    // Se actualiza el estado con la nueva tarea actualizada
    this.setState({
        items: [
            ...this.state.items,
            ...foundTask
        ]
    });
}

```

La función **removeTask** también se requerirá desde el componente List y, como markAsCompleted, necesita recibir el id para eliminar la tarea específica:

#### Todo.js

```
removeTask = id => {
    // Se filtran las tareas eliminando el id de la tarea ...
    const filteredTask = this.state.items.filter(
        task => task.id !== id
    );

    // Se actualiza el estado de los elementos...
    this.setState({
        items: filteredTasks
    });
}

```

El componente Todo debería parecerse a:

#### Todo.js 
```


```