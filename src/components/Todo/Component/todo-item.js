
import React from 'react';

import './sass/todo-item.css';

export default class TodoItem extends React.Component {
  constructor(props){
    super(props);
    this._updateItem = this._updateItem.bind(this);
    this._deleteItem = this._deleteItem.bind(this);
  }
  // onUpdate
  _updateItem() {
    this.props.onUpdate(this.props.todo.key);
  }

  _deleteItem(event) {
    event.stopPropagation();
    this.props.onDelete(this.props.todo.key);
  }  
  render() {
    return (
      <li className="todo-list-item" onClick={this._updateItem.bind(this)}>
        <label htmlFor="listItem{this.props.index}">{this.props.todo.value}</label>
        <i className="todo-list-item__edit"></i>
        <i className="todo-list-item__delete" onClick={this._deleteItem.bind(this)}></i>
      </li>
    )       
  }
}
