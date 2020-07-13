import React, { Component } from 'react';
import './App.css';

import Tasks from './Tasks/Tasks';
import AddTask from './Tasks/AddTask/AddTask';

class App extends Component {

  state = {
    tasks: [
    ]
  }

  addTaskHandler = (title) => {
    if (title) {
      const tasks = [...this.state.tasks];
      tasks.push({ id: this.getNextId(), title: title});
      this.setState({tasks});
    }
  }

  deleteTaskHandler = (id) => {
    const tasks = [...this.state.tasks];

    const taskIndex = tasks.findIndex((person) => {
      return person.id = id
    });

    tasks.splice(taskIndex, 1);

    this.setState({
      tasks
    }, () => {
      console.log('Current state: ', this.state.tasks.length);
    });    
  }  

  getNextId() {
    return this.state.tasks.length > 0 ? Math.max.apply(Math, this.state.tasks.map((task) => task.id)) + 1 : 1;
  }

  render() {
    return (
      <div className="App container">
        <h1 className="mt-1">Todo List</h1>
        <AddTask clicked={this.addTaskHandler} />
        <Tasks tasks={this.state.tasks} clicked={this.deleteTaskHandler} />
      </div>
    );
  }

}

export default App;
