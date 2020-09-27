import React from 'react';
import { Link } from 'react-router-dom';
import net from "./network.jpg";

export default class SecStrengthsWeak extends React.Component {
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
				<p>One strength of this network is that the modem and router are not both in the same location. The router is in its own room in a separate part of the building behind locked doors, making physical attacks harder. The network is also run on the fourteenth floor of a high rise, which makes drive by attacks more difficult as well as the possibility of connecting to the system unless one could get up and into the building difficult. The weakness of this network is that the network does not have any protection on it other than a password to connect to wifi from the modem. Network scanning is not blocked and there are no firewalls preventing different packets or attacks from occurring. This is a highly vulnerable system that needs to have more security added to be compliant. </p>
				<br/>
				<Link to="/">Go Back</Link>
				<br/>
				<p>     </p>
			</center>

			</>
		);
	}
}