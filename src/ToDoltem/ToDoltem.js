import React from 'react';

const ToDoItem = props => { 
    //props объект который помогает прокидывать
    //данные в наш объект
    const resolvedClass ={
        textDecoration : "line-through"
    }
// const className = 'task' + (task.done ? 'task-done : '');

    return (
      <div className="todo-item">
           <div className="input-wrapper">
              <input 
              type="checkbox"
              defaultChecked={props.completed}
              onChange={props.handleChange}
             />
          </div>
          <div className="description-wrapper"> 
              <p
                 style={props.completed === true ? resolvedClass: {}}
              >
                 {props.description}
              </p> 
          </div>
          {/* <div       
  <input
  type={text}
  value={name}
  onChange={e => setName(e.target.value)}
  placeholder="Введи имя нового таска"
  /> */}
     </div>
    )
}

export default ToDoItem;