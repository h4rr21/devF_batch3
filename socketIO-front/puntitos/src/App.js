import React, { Component } from 'react';
import socketIOclient from 'socket.io-client';
import './App.css';

class App extends Component {

  color='#0000';
  
  componentDidMount(){
    this.socket = socketIOclient('http://localhost:5000');
    this.socket.on('point_added',(resp)=>{
      this.renderPixel(resp.x, resp.y, resp.color);
    })
    this.refs.elcanvas.width = window.innerWidth;
    this.refs.elcanvas.height = window.innerHeight;
    this.color = "#"+(Math.random()*0xFFFFFF<<0).toString(16);
  }

  renderPixel = (x ,y, color)=>{
    let context = this.refs.elcanvas.getContext('2d');
    context.fillStyle = color;
    context.fillRect(x,y,8,8);
  }

  elMouse = (evt)=>{
    console.log(evt);
    console.log(evt.clientX,evt.clientY);
    this.socket.emit("add_point",{x:evt.clientX,y:evt.clientY,color:this.color});
  }

  render() {
    return (
     <canvas ref="elcanvas" onClick={(event)=>this.elMouse(event)} />
    );
  }
}

export default App;
