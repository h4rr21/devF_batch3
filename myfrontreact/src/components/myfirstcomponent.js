import React, { Component } from 'react';
import Button from '@material-ui/core/Button';

class MyFirstComponent extends Component{
	render(){
		return(
			<div>
				<p> {this.props.text} </p>
				<Button color="primary" variant="contained" onClick={this.props.handler}> {this.props.buttonText} </Button>
			</div>
		)
	}
}

export default MyFirstComponent;