import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import "../App.css";


export class Header extends React.Component {
	dashLink = "/";

	state = {
	}

	render() {
			return (
				<>
				<div 
					style={{
						"backgroundColor" : "rgb(96, 98, 151)",
						"color" : "white",
						"height" : "40px",
						"text" : "center"
					}}>
				<div>
					<title style={{"text" : "center"}}>Slaton Network</title>
				</div>
				<div>
					<nav className="navbar navbar-expand-lg navbar-light bg-success">
						<div className="container-fluid">
							<div className="navbar-header">
								<a className="navbar-brand text-white" >
									Slaton Network
								</a>
							</div>
	
						</div>
					</nav>
				</div>
				</div>
				</>
			);
	}
}