# CAPITULO 2

# Cambiador de criptomonedas, implementación de shouldComponentUpdate

Vamos a crear un cambiador de criptomonedas para aprender cómo funciona shouldComponentUpdate.

Todas las cantidades deberían ser números enteros y el precio de cada moneda es de 10 dolares. El código es sencillo, debería verse así:

#### Coins.js

```
import React, { Component } from 'react';
import './Coins.css';

class Coins extends Component {

    constructor(){
        super();

        this.state = {
            dollars: 0
        };
    }

    shouldComponentUpdate(props, state) {
        // Solo se actualiza si son múltiplos de 10
        return state.dollars % 10 === 0;
    }

    handleOnChange = e => {
        this.setState({
            dollars: Number(e.target.value || 0)
        });
    }

    render() {
        return (
            <div className='Coins'>
                <h1>Buy Crypto Coins!</h1>

                <div className='question'>
                    <p>How much dollars do you have</p>
                    <p>
                        <input
                            placeholder='0'
                            onChange={this.handleOnChange} type="text" 
                            />
                    </p>
                </div>

                <div className='answer'>
                    <p> Crypto coins price: $10 </p>
                    <p>
                        You can buy <strong>{this.state.dollars / 10}</strong>
                    </p>
                </div>
            
            </div>
        )
    }

}

export default Coins;
```

`shouldComponentUpdate`: Este método es uno de los más importantes ya que mejora el rendimiento de la aplicación. Recibe dos parámetros (props,state) cada vez que se actualiza el estado local, y cuando se actualiza un prop se ejecuta este método. El valor devuelto debe ser booleano, lo que significa que si intencionadamente escribe lo que viene a continuación, el componente no se actualizará porque este método bloqueará su actualización:

```
    shouldComponentUpdate(props, state) {
        return false;
    }

```
Pero, por otra parte, si devuelve true o incluso si no define este método en absoluto, el comportamiento por defecto de React es siempre actualizar el componente, que en algunos casos puede traer problemas de rendimiento.

En el ejemplo, devuelve true cuando el número de dólares que el usuario ingresa es un múltiplo de 10. Por eso, en este caso solo se ve la actualización del componente.

Ahora, si elimina el método shouldComponentUpdate del componente o devuelve directamente un valor true, el componente se actualizará cada vex que escribe un número.

A continuación, los estilos CSS:

#### Coins.css

```
.Coins {
    background-color: #f5f5f5;
    border-radius: 4px;
    border: 1px solid #e3e3e3;
    box-shadow: inset 0 1px 1px rgba(0,0,0,.05);
    margin-bottom: 20px;
    margin: 50px auto;
    min-height: 20px;
    padding: 19px;
    text-align: left;
    width: 70%;
}

.Coins input {
    background-color: #fff;
    border-radius: 4px;
    border: 1px solid #ccc;
    box-shadow: inset 0 1px 1px rgba(0,0,0,.075);
    color: #555;
    font-size: 14px;
    height: 34px;
    line-height: 34px;
    padding: 6px 12px;
    width: 120px;
}
```

