import React from 'react';
import { Link } from 'react-router-dom';
import one from './one.jpg';
import two from './two.jpg';
import three from './three.jpg';


export default class PortsProtocols extends React.Component {
	render() {
		return (
			<>

			<center>
				<br/>
				<img src={one}
				style={{"height": "250px"}}/>
				<br/>
				<p>The above screenshot shows the ports open on the modem.
The protocols running are all TCP protocols to connect to the router and to connect to devices on the network.
</p>
				<br/>
				<img src={two}
				style={{"height":"240px"}}/>
				<br/>
				<p>The above screenshot shows the ports open on the router.
The protocols running are all TCP protocols to connect to the modem and to the internet.
</p>
				<br/>
				<img src={three}
				style={{"height":"240px"}}/>
				<br/>
				<p>The above screenshot shows the ports open on the windows machine.
The protocols running are all TCP, connecting to the modem as well as the internet in both a secure and insecure protocol. 
<br/><br/>Various other devices on the network use ports 0 (ping), 53 (DNS), 443 (SSL), 123 (NTP), as well as 49997 and 55329 (STUN). <br/><br/>These protocols are used to create both secure and insecure connections to various servers and connections to allow for communication between devices and systems outside of the network.</p>
				<br/>
				<Link to="/">Go Back</Link>
				<br/>
				<p>   </p>
				<br/>
			</center>

			</>
		);
	}
}