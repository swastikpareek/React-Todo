import React from 'react';


import './sass/todo-box.css';

/**
  * Properties: 
  * onInsertion : 'Event callback fn triggered by TodoBox Component when the Addition Happens'
*/


export default class TodoBox extends React.Component {
  constructor() {
    super();
    this._addTodo = this._addTodo.bind(this);
  }
  _onEnterInsert = (event) => {
    if(event.keyCode === 13) {
      this._addTodo(event);
    }
  }
  _addTodo = (event) => {
    const {_todo} = this.refs;
    if(_todo.value.length > 0) {
      this.props.onInsertion({
        'type': 'task',
        'done': false,
        'value': _todo.value
      });
      _todo.value = '';
      _todo.focus();      
    }
  }
  render() {
    return (
      <div className="todo-box"> 
      <input type="button" id="todoBoxInputButtons" placeholder="What you want to do" value="+" onClick={this._addTodo.bind(this)}/>
        <input type="text" id="todoBoxInputs" ref="_todo" placeholder="What you want to do" onKeyUp={this._onEnterInsert.bind(this)}/>
      </div>
    )
  }
}