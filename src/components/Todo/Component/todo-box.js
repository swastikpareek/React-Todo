import React from 'react';

/**
  * Properties: 
  * onInsertion : 'Event callback fn triggered by TodoBox Component when the Addition Happens'
*/


export default class TodoBox extends React.Component {
  constructor() {
    super();
    this._addTodo = this._addTodo.bind(this);
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
        <input type="text" id="todoBoxInputs" ref="_todo" placeholder="What you want to do" />
        <input type="button" id="todoBoxInputButtons" placeholder="What you want to do" value="Add it!" onClick={this._addTodo.bind(this)}/>
      </div>
    )
  }
}