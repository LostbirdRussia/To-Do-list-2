import React, { Component } from 'react';
import './App.css';
import ToDoItem from './ToDoltem/ToDoltem.js';
import todosData from './todosData.js';

class App extends Component {
  constructor(){
   super();
    this.state = {
      todoItems : todosData
    }
  }
  handleChange = id => {
    console.log("Значение поменялось", id);
  }
  render(){
    const{todoItems} = this.state;
    const activeTasks = todoItems.map(item =>{
      return (
        <ToDoItem
          key={item.id} //ключ для списка
          description={item.description} // передача
          completed={item.completed}
          handleChange={() => { this.handleChange(item.id) }} //()вызов функции
        />
      )
    })
    return (
      <div className="App">
        {activeTasks}
      </div>
    );
  }
}

export default App;


