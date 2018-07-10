import React, { Component } from 'react';
import './App.css';

import AppBar from "./components/appBar";
import Card from "./components/cards";
import Search from "./components/search";
import imageLibrillo from "./images/hpimage.jpg";
import imageMagodeOz from "./images/magodeoz.jpg";
import imageFreeWilly from "./images/freewilly.jpg";
import imagePrincipito from "./images/imageprincipito.jpg";

class App extends Component {

state = {
  filtro:"",
}

  filter = (event) =>{
      // if (event.target.value){
      //   console.log("event", event.target.value);
      // }
      this.setState({filtro: event.target.value});
  };

  render() {

    const libros = [{
      id: 1,
      tittle: "Librillo",
      desc: "the best book butos",
      image: imageLibrillo
    },
    {
      id: 2,
      tittle: "Mago de Oz",
      desc: "y sus aventuras butas",
      image: imageMagodeOz
    },
    {
      id: 3,
      tittle: "Principito",
      desc: "y sus aventuras butas",
      image: imagePrincipito
    },
    {
      id: 4,
      tittle: "Free Willy ",
      desc: "y sus aventuras butas",
      image: imageFreeWilly
    },
  ];
  
    const librosFiltrados = libros.filter(libro => {
      if(this.state.filtro == 0){
        return true;
      }else if (libro.tittle.toLowerCase().indexOf(this.state.filtro.toLowerCase()) >= 0){
        return true;
      }else{
        return false;
      }
    })
    
    
    return (
      <div className="App">
        <AppBar tittle="My Fist React APP butos"/>
        <Search value={this.filter}/>
        <div className="flex">
          {librosFiltrados.map(libro =>{
            return ( 
                    <Card 
                      key={libro.id}
                      tittle={libro.tittle}
                      desc={libro.desc}
                      image={libro.image}
                    />
                    )
          })}
        </div>
        {/* <Card tittle="Librillo" desc="the best book butos" image={imageLibrillo}/>
        <Card tittle="Mago de Oz" desc="y sus aventuras butas" image={imageMagodeOz}/> */}
      </div>
    );
  }
};

export default App;
