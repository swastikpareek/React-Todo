import React, { Component } from 'react';

import TodoBox from './component/todo-box';
import TodoList from './component/todo-list';

import './sass/todo.css';

// if(localStorage.getItem('todos') === null ){
//   localStorage.setItem('todos', JSON.stringify({
//     name: 'todos',
//     list: [{
//       'key': 0,
//       'type': 'task',
//       'done': true,
//       'value': 'Brush Your Teeth'
//     },{
//       'key': 1,
//       'type': 'task',
//       'done': true,
//       'value': 'Learn React'
//     },{
//       'key': 2,
//       'type': 'task',
//       'done': false,
//       'value': 'Play Age of Empire'
//     }]
//   }));  
// }



export default class Todo extends Component {
  
  constructor() {
    // Calling super constructor
    super();
    
    // Binding these functions with this scope.
    this._pushTodo = this._pushTodo.bind(this);
    this._updateState= this._updateState.bind(this);

    // Defining the State. get default value from localstorage
    this.state = {
      todos : localStorage.getItem('todos') === null ? [] : JSON.parse(localStorage.getItem('todos')).list
    }
  }

  // Push to state logic,
  _pushTodo = (el) => {
    // Updating the React Todo State.
    this.setState({
      'todos': [...this.state.todos, el]
    });
    // Updating Local Storage
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
    
    // Updating Local Storage
    localStorage.setItem('todos', JSON.stringify({'name': 'todos', list: newJson}));
  }

  // update Todos.
  _deleteItem = (key) => {
    const newJson = this.state.todos.filter((el) => el.key !== key);
    this.setState({
      'todos': newJson
    });

    // Updating Local Storage
    localStorage.setItem('todos', JSON.stringify({'name': 'todos', list: newJson}));
  } 

  render() {
    return (
      <div className="todoblock block">
        <h2 className="block-title">Todo List</h2>
        <div className="block-content">
          <TodoBox onInsertion={this._pushTodo} />
          <div className="todo-box-lists">
            <TodoList items={this.state.todos.filter((el) => !el.done)} classState="undone-tasks" no-result="No undone Tasks" title="Undone Tasks" onUpdate={this._updateState} onDelete={this._deleteItem}/>
            <TodoList items={this.state.todos.filter((el) => el.done)} classState="done-tasks" no-result="No done Tasks" title="Done Tasks" onUpdate={this._updateState} onDelete={this._deleteItem}/>
          </div>          
        </div>
      </div>
    )
  }
}
