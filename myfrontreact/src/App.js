import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MyFirstComponent from './components/myfirstcomponent';

class App extends Component {
  render() {
    return (
      <div className="App">
        <MyFirstComponent text={"Hola devG"}/>
        <MyFirstComponent text={"ya se acabó"}/>
      </div>
    );
  }
}

export default App;
