import React from 'react';
import { Link } from 'react-router-dom';
import net from "./network.jpg";

export default class Home extends React.Component {
	render() {
		return (
			<>
			<center>
				<div style={{"margin" : "2em"}}>
					<img 
						alt="logo" 
						src={net}
						style={{"height" : "300px"}}/>
					<h2>
						The Slaton Network Workbook
					</h2>
					<p>This site holds information about the Slaton
						network. Click on the following links to learn
						more:
					</p>
					<Link to='/ipaddressrange'>
						IP Address Ranges
					</Link>
					<br/>
					<Link to='/networkdiagram'>
						Network Diagram
					</Link>
					<br/>
					<Link to='/networkdeviceinformation'>
						Network Devices Information
					</Link>
					<br/>
					<Link to='/portsprotocols'>
						Ports & Protocols
					</Link>
					<br/>
					<Link to='/seccontrols'>
						Network Security Controls
					</Link>
					<br/>
					<Link to='/strengthsweaknesses'>
						Network Security Strengths & Weaknesses
					</Link>
					<br/>
					<Link to='/networkroadmap'>
						Network Roadmap
					</Link>
					<br/>
					<Link to='/locationdescriptions'>
						Location Descriptions
					</Link>
				</div>
			</center>
			</>
		);
	}
}

