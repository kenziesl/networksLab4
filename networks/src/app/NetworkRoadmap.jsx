import React from 'react';
import { Link } from 'react-router-dom';
import net from "./network.jpg";

export default class NetworkRoadmap extends React.Component {
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
				<p>This network needs some serious help when it comes to becoming more secure. Below are some of the following steps that can be taken to enact change.
					<ul>
						<li>Change the default network name and password that is printed on the modem.</li>
						<li>Enable network encryption on the wireless router for the network.</li>
						<li>Disable network broadcasting so it is not discoverable by others.</li>
						<li>Install a firewall on the network to block unwanted network traffic.</li>
						<li>Install a VPN to add an extra layer of security.</li>
					</ul>
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