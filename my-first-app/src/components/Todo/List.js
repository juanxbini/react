import React from 'react';

const List = props => {

    return (
        
        <ul>
            {props.items.map((item, key)=>{

                return (

                    <li
                        key={key}
                        /* Si en el item la propiedad completed es verdadera 
                        se le asigna la clase completed, sino, pending.*/
                        className={`${item.completed ? 'completed':'pending'}`}>

                        {item.task}

                        <div className='actions'>
                            {/* Utilizara el callback en onClick para recurrir a la funcion markAsCompleted*/}
                            <span 
                                className={`${item.completed ? 'hide' : 'none'}`}
                                onClick={() => props.markAsCompleted(item.id)}>
                                    <i className='fa fa-check'></i>
                            </span> 
                            <span 
                                className='trash'
                                onClick={() => props.removeTask(item.id)}>
                                    <i className='fa fa-trash'></i>
                            </span>
                        </div>
                    </li>

                )    

            })}
        </ul>
    )

}

export default List;