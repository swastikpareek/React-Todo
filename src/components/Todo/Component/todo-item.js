import React from 'react';

/*** onUpdate={this._changeState.bind(this, t.key)}, t.value)  
*/

export default class TodoItem extends React.Component {
  constructor(props){
    super(props);
    this._updateState = this._updateState.bind(this);
  }
  _updateState = () => {
    this.props.onUpdate(this.props.todo.key);
  }
  // onUpdate
  render() {
    return (
      <li className="todo-list-item" onClick={this._updateState.bind(this)}>
        <label htmlFor="listItem{this.props.index}">{this.props.todo.value}</label>
      </li>
    )       
  }
}


