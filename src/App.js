import React, { Component } from 'react';
import './App.css';
import TodoForm from './components/TodoForm';

class App extends Component {
  render() {
    return (
      <div className="App mt-3 mx-auto">
        <TodoForm />
      </div>
    );
  }
}

export default App;
