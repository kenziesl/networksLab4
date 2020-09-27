import React from 'react';
import { dtnk } from 'react-router-dom';
import net from "./network.jpg";
import { Link } from 'react-router-dom';


export default class NetworkDeviceInformation extends React.Component {
	render() {
		return (
			<>
				<center>
				<br/>
				<img 
						alt="logo" 
						src={net}
						style={{"height" : "300px"}}/>
				<dl>
					<dt>Windows Machine</dt>
						<dd>IP = 127.0.0.1</dd>
					<br/>
					<dt>iPhone 10</dt>
						<dd>IP = 192.168.1.217</dd>
						<dd>MAC = EC:2C:E2:20:43:35 </dd>
					<br/>
					<dt>Amazon Firestick 1</dt>
						<dd>IP = 192.168.1.215</dd>
						<dd>MAC = A0:02:DC:8F:48:84</dd>
					<br/>
					<dt>Router</dt>
						<dd>IP = 192.168.1.254</dd>
						<dd>MAC = 88:96:4E:73:DB:92</dd>
					<br/>	
					<dt>Modem</dt>
						<dd>IP = 192.168.1.218</dd>
						<dd>MAC = 88:96:4E:73:DB:90</dd>
				</dl>
				<br/>
				<Link to="/">Go Back</Link>
				<br/>
				<p>    </p>
				<br/>
				</center>
			</>
		);
	}
}