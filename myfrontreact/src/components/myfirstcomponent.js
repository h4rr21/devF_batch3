import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CardMedia from '@material-ui/core/CardMedia';


class MyFirstComponent extends Component{
	render(){
		return(
			<div>
						<Card>
							<CardMedia
							image={this.props.url}
							title={this.props.name}
							/>
							<CardContent>
								<Typography variant="headline" component="h2">
									{this.props.description}
								</Typography>
							</CardContent>
						</Card>
			</div>
		)
	}
}

export default MyFirstComponent;