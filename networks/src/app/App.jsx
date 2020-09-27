import React, { Component } from 'react';
import "../App.css";
import { Header } from './Header';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ROUTES from './../routes.js';
import Home from './Home';

class App extends Component {

    state = {}

    render() {
        return (
            <>
                <div className="container-fluid p-0">
                    <Router>
                        <Header />
                        <Switch>
                            {ROUTES.map(({ 
                                    path, 
                                    component: C
                                }, i) => (
                                <Route
                                    key={i}
                                    path={path}
                                    render={(props) => 
                                        <C 
                                            {...props}
                                        />} 
                                />
                            ))}
                            <Home />
                        </Switch>
                    </Router>
                </div>
            </>
        )
    }
}

export default App;