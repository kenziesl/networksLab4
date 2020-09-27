import React from 'react';
import { Link } from 'react-router-dom';
import ipranges from './ipranges.jpg';

export default class IPAddressRange extends React.Component {
	render() {
		return (
			<>

			<center>
				<br/>
				<img 
					src={ipranges}
				/>
				<p>IP Range is from 192.168.1.0 to 192.16.1.255 </p>
				<Link to="/">Go Back</Link>
			</center>

			</>
		);
	}
}