import React from 'react';

import TodoItem from './todo-item';

import './sass/todo-items.css';

export default class TodoItems extends React.Component {
  render() {
    return (
      <ul className="todo-box-lists-status-list">
        {this.props.todos.length > 0 ? this.props.todos.map((t,key) => <TodoItem key={key} todo={t} onUpdate={this.props.onUpdate}/>) : <li className="no-tasks"> {this.props['no-result']} </li>}
      </ul>
    )
  }
}
