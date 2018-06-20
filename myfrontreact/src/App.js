import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MyFirstComponent from './components/myfirstcomponent';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      firstBox: "first box default",
      secondBox: "second box default",
      thirdBOx: "third box default",
      inputValue: "textoDefault"
    }
  };

  handleClickOne = (event) => {
      event.preventDefault();
      this.setState({
        firstBox: this.state.inputValue
      })
  }
  handleClickTwo = (event) => {
      event.preventDefault();
      this.setState({
        secondBox: this.state.inputValue
      })

  }
  handleClickThree = (event) => {
      event.preventDefault();
      this.setState({
        thirdBOx: this.state.inputValue
      })
  }

  render() {
    return (
      <div className="App">
          <input onChange= {(evt) => { this.state.inputValue=evt.target.value }} />
          <MyFirstComponent  text={this.state.firstBox} handler={this.handleClickOne} buttonText="boton1" />
          <MyFirstComponent  text={this.state.secondBox} handler={this.handleClickTwo} buttonText="boton2" />
          <MyFirstComponent  text={this.state.thirdBOx} handler={this.handleClickThree} buttonText="boton3" />
      </div>
    );
  }
}

export default App;
