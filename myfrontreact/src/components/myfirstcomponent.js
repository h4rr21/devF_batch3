import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';


class MyFirstComponent extends Component{
	render(){
		return(
			<div>
						<Card>
							<CardContent>
								<Typography variant="headline" component="h2">
									{this.props.text}
								</Typography>
							</CardContent>
							<CardActions>
								<Button color="primary" variant="contained" onClick={this.props.handler}> {this.props.buttonText} </Button>
							</CardActions>
						</Card>
			</div>
		)
	}
}

export default MyFirstComponent;