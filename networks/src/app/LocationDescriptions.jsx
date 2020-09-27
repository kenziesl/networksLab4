import React from 'react';
import { Link } from 'react-router-dom';
import net from "./network.jpg";

export default class LocationDescriptions extends React.Component {
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
				<p>This network runs within an apartment high rise building, meaning the locations and separations between different systems are unusual. 
The routers for the building are located on the first floor in a phone room. This is locked and is only unlocked for technicians.
Modems are plugged into designated ethernet ports based off which provider is being used.
The apartment complex only allows Spectrum and AT&T networks.
</p>
				<br/>
				<Link to="/">Go Back</Link>
				<br/>
				<p>     </p>
			</center>

			</>
		);
	}
}