import React from 'react';
import './App.css';
import ToDoItem from './ToDoltem/ToDoltem.js';
import todosData from './todosData.js';

function App() {
  const handleChange = id => {
    console.log("Значение поменялось", id);
  }
  const todoItems = todosData.map(item =>{
    return (
      <ToDoItem
        key={item.id} //ключ для списка
        description={item.description} // передача
        completed={item.completed}
        handleChange={() => { handleChange() }} //()вызов функции
      />
    )
  })
  return (
    <div className="App">
      {todoItems}
    </div>
  );
}

export default App;


