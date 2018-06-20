import React, { Component } from 'react';

class MyFirstComponent extends Component{
	render(){
		return(
			<div>
				<p> {this.props.text} </p>
				<button onClick={this.props.handler}> {this.props.buttonText} </button>
			</div>
		)
	}
}

export default MyFirstComponent;