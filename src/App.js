import React, { Component } from 'react';
import './App.css';
import Widget from './components/Widget'

class App extends Component {
  render() {
    return (
      <div className="App">
          <Widget titulo="Admissão"/>
      </div>
    );
  }
}

export default App;
