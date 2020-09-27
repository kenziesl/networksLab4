import React from 'react';
import { Link } from 'react-router-dom';
import net from "./network.jpg";

export default class SecControls extends React.Component {
	render() {
		return (
			<>

			<center>
			<br/>
			<img 
						alt="logo" 
						src={net}
						style={{"height" : "300px"}}/>
			<br/>
				<p>Currently, this network does not use any network security controls. It is a highly vulnerable system and could very easily be attacked. </p>
				<br/>
				<Link to="/">Go Back</Link>
				<br/>
				<p>   </p>
			</center>

			</>
		);
	}
}