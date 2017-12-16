import React, { Component } from 'react';

import TodoBox from './Component/todo-box';
import TodoItem from './Component/todo-item';

if(localStorage.getItem('todos') === null ){
  localStorage.setItem('todos', JSON.stringify({
    name: 'todos',
    list: [{
      'key': 0,
      'type': 'task',
      'done': true,
      'value': 'Brush Your Teeth'
    },{
      'key': 1,
      'type': 'task',
      'done': true,
      'value': 'Learn React'
    },{
      'key': 2,
      'type': 'task',
      'done': false,
      'value': 'Play Age of Empire'
    }]
  }));  
}



export default class Todo extends Component {
  
  constructor() {
    // Calling super constructor
    super();
    
    // Binding these functions with this scope.
    this._pushTodo = this._pushTodo.bind(this);
    this._updateState= this._updateState.bind(this);

    // Defining the State.
    this.state = {
      todos : []
    }
  }

  // Push to state logic,
  _pushTodo = (el) => {
    // Getting the latest Key
    el.key = JSON.parse(localStorage.getItem('todos')).list.length;
    // Updating the React Todo State.
    this.setState({
      'todos': [...this.state.todos, el]
    });
    // Pushing the data into local Storage
    localStorage.setItem('todos', JSON.stringify({'name': 'todos', list: [...this.state.todos, el]}));
  }

  // update Todos.
  _updateState = (key) => {
    const newJson = this.state.todos.map((el, k) => {
      if(key === el.key) {
        el.done = !el.done;
      }
      return el;
    });
    this.setState({
      'todos': newJson
    });
  }

  render() {
    return (
      <div className="todoblock block">
        <h2 className="block-title">Todo List Application</h2>
        <div className="block-content">
          <TodoBox onInsertion={this._pushTodo} />
        </div>
        <div className="todo-box-lists">
          <div className="todo-box-lists-status undone-tasks">
            <h3 className="todo-box-lists-status-heading"> Undone Tasks </h3>
            <ul className="todo-box-lists-status-list">
              {this.state.todos.filter((el) => !el.done).length > 0 ? this.state.todos.filter((el) => !el.done).map((t,k) => <TodoItem key={k} todo={t} onUpdate={this._updateState}/>) : <li className="no-tasks"> No Undone tasks </li>}
            </ul>
          </div>
          <div className="todo-box-lists-status done-tasks">
            <h3 className="todo-box-lists-status-heading"> Done Tasks </h3>
            <ul className="todo-box-lists-status-list">
              {this.state.todos.filter((el) => el.done) > 0 ? this.state.todos.filter((el) => el.done).map((t,k) => <TodoItem key={k} todo={t} onUpdate={this._updateState}/>) : <li className="no-tasks"> No Done tasks </li>}
            </ul>
          </div>          
        </div>
      </div>
    )
  }
}
