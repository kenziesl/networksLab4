import React from 'react';
import { Link } from 'react-router-dom';
import netD from './nd.JPG';

export default class NetworkDiagram extends React.Component {
	render() {
		return (
			<>

			<center>
				<br/>
				<img 
					src={netD}
				/>
				<br/>
				<Link to='/'>Go Back</Link>
			</center>

			</>
		);
	}
}