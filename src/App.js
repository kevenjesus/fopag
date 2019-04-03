import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import login, { Login, Admissoes } from './Utils/Services'

class App extends Component {
  render() {
    return (
      <div className="Services">
        <button onClick={() =>
          Admissoes()}>
          Teste
          </button>
      </div>
    );
  }
}

export default App;
