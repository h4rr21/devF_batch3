import React, { Component } from 'react';

class MyFirstComponent extends Component{
	render(){
		return(
			<p> {this.props.text} </p>
		)
	}
}

export default MyFirstComponent;