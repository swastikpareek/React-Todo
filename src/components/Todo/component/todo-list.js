import React from 'react';

import TodoItems from './todo-items';

import './sass/todo-list.css';

export default class TodoList extends React.Component {
  render() {
    return(
      <div className={"todo-box-lists-status " + this.props.classState} >
        <h3 className="todo-box-lists-status-heading"> {this.props.title} </h3>
        <TodoItems todos={this.props.items} onUpdate={this.props.onUpdate} no-result={this.props['no-result']}/>
      </div> 
    )
  }
}