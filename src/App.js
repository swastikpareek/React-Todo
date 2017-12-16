import React, { Component } from 'react';
import './App.css';

import Todos from './components/Todo/todo';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Todos />
      </div>


    );
  }
}

export default App;
