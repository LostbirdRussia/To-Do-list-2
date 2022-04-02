import React from 'react';

const ToDoItem = props => { 
    //props объект который помогает прокидывать
    //данные в наш объект
    return (
            <div className="todo-item">
                <div className="description-wrapper"> 
                    <p>{props.description}</p> 
                </div>
                <div className="input-wrapper">
                    <input 
                    type="checkbox"
                    defaultChecked={props.completed}
                    onChange={props.handleChange}
                   />
                </div>
           </div>
    )
}

export default ToDoItem;