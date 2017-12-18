
import React from 'react';

import './sass/todo-item.css';

export default class TodoItem extends React.Component {
  constructor(props){
    super(props);
    this._updateState = this._updateState.bind(this);

    this._deleteItem = this._deleteItem.bind(this);
    this._editItem = this._editItem.bind(this);

    this._updateItem = this._updateItem.bind(this);
    this._closeEdit = this._closeEdit.bind(this);

    this.state = {
      'editing': false
    }
  }
  // onUpdate
  _updateState() {
    this.props.onUpdate(this.props.todo.key);
  }

  _deleteItem(event) {
    event.stopPropagation();
    this.props.onDelete(this.props.todo.key);
  }  

  _editItem(event) {
    event.stopPropagation();
    this.setState({'editing': true});
  } 
  
  _updateItem(event) {
    event.stopPropagation();
    const {_edit} = this.refs;
    this.props.onEdit(this.props.todo.key, _edit.value);
    this.setState({'editing': false});
  }

  _closeEdit(event) {
    event.stopPropagation();
    this.setState({'editing': false});
  }

  _onEnterInsert = (event) => {
    if(event.keyCode === 13) {
      this._updateItem(event);
    } 
    else if(event.keyCode === 27) {
      this._editItem(event);
    }
  }
  render() {
    if(!this.state.editing) {
      return (
        <li className="todo-list-item" onClick={this._updateState.bind(this)}>
            <label htmlFor="listItem{this.props.index}">{this.props.todo.value}</label>
            <i className="todo-list-item__edit" onClick={this._editItem.bind(this)}></i>
            <i className="todo-list-item__delete" onClick={this._deleteItem.bind(this)}></i>
        </li>
      ) 
    } else {
      return (
        <li className="todo-list-item">
          <input className="todo-list-item__input" type="text" defaultValue={this.props.todo.value} ref="_edit" onKeyUp={this._onEnterInsert.bind(this)}/> 
          <i className="todo-list-item__update" onClick={this._updateItem.bind(this)}></i>
          <i className="todo-list-item__delete" onClick={this._closeEdit.bind(this)}></i>
        </li>
      )
    } 
      
  }
}
