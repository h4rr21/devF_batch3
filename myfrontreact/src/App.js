import React, { Component } from 'react';
import './App.css';
import MyFirstComponent from './components/myfirstcomponent';
import Grid from '@material-ui/core/Grid';
import axios from 'axios';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      // firstBox: "first box default",
      // secondBox: "second box default",
      // thirdBOx: "third box default",
      // inputValue: "textoDefault", 
      images:[
        {
          id:1,
          url:"www.images.com",
          name:"laimagen",
          description:"asdfasdf imagen"
        }
      ]
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

  componentDidMount(){
    axios.get('http://localhost:5000/images').then((response) => {
      this.setState({
        images: response.data
      })
      console.log("la respuesta es", response.data)
    }).catch((error)=>{
      console.log("el error es", error)
    })
  }

  render() {
    return (
      
        <div className="App">
          {
            this.state.images.map((image)=>{
              return  <MyFirstComponent
                        key={image.id}
                        url={image.url}
                        name={image.name} 
                        description={image.description}
                      />
            })
          }
        </div>
     
      // <div className="App">
      //     <input onChange= {(evt) => { this.state.inputValue=evt.target.value }} />
      //     <Grid container spacing={16}>
      //       <Grid item xs={3}>
      //         <MyFirstComponent  text={this.state.images[0].url} handler={this.handleClickOne} buttonText="boton1" />
      //       </Grid> 
      //       <Grid item xs={3}>
      //         <MyFirstComponent  text={this.state.images[1].url} handler={this.handleClickTwo} buttonText="boton2" />
      //         </Grid>
      //       <Grid item xs={3}>  
      //         <MyFirstComponent  text={this.state.thirdBOx} handler={this.handleClickThree} buttonText="boton3" />
      //       </Grid>
      //     </Grid>
      // </div>
    );
  }
}

export default App;
