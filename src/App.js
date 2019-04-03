import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import Reducers from "./Reducers/Reducer";
import thunk from "redux-thunk";
import HomePage from "./components/Home/HomePage"

let store = createStore(Reducers, applyMiddleware(thunk));

class App extends Component {
  render() {
    return (
      <Provider store = { store } >
        <HomePage />
      </Provider >
    );
  }
}

export default App;
