import React from 'react';
import './AllToDoItem.css';
import ToDoItem from './ToDoltem/ToDoltem.js';
import todosData from './todosData.js';
import TaskInput from './Component/TaskInput.js';

class App extends React.Component {
  constructor() {
   super();

    this.state = {
      todoItems : todosData
    }
  }

  addTask = task => {
    this.setState(state => {
      let { ToDoItem } = state;
      task.push({
        id: ToDoItem.length !== 0? ToDoItem.length : 0,
        title: ToDoItem,
        done: false
      });
      return task;
    });
  };

  deleteTask = id => {
    const index = this.state.task.map(task => task.id).indexOf(id);
    this.setState(state => {
      let { tasks } = state;
      delete tasks[index];
      return tasks;
    });
  };

  handleChange = id => {
    const index = this.state.todoItems.map(item => item.id).indexOf(id);
    this.setState( state =>{
      let {todoItems} = state;
      todoItems[index].completed = true
      return todoItems;
    })
  }
  render(){
    const { todoItems } = this.state;
    const activeTasks = todoItems.filter(task => task.completed === false);
    const completedTasks = todoItems.filter(task => task.completed === true);
    // const { tasks } = this.state;
    // const activeTasks = tasks.filter(task => !task.done);
    // const doneTasks = tasks.filter(task => task.done);
    const finalTasks = [...activeTasks,...completedTasks].map(item => {
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
      <h1 className='title'>ToD0 List</h1>
      <h2 className='titleBloc'>Task</h2>
      {finalTasks}
      <TaskInput addTask={this.addTask}>ADD</TaskInput>
      {/* кнопка ввода */}
    </div>
    );
  }
}

export default App;
 // return (
    //     <View>
    //         <Header />
    //         <View>
    //             <Flatlist data={listOfItems} renderItem={({ item }) => (
    //              <Text>{item.text}</Text>
    //             )} />
    //         </View>
    //     </View>
    // )


