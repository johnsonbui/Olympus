import React from 'react';
import { 
    Route, 
    NavLink,
    Switch,
    BrowserRouter as Router
} from 'react-router-dom';
import App from '../App/App';
import Home from '../home-page/home';
import About from '../about-page/about';
import Projects from '../projects-page/projects';
import Journey from '../journey-page/journey';
import ErrorMsg from '../error-page/error-page';
import './navigation-bar.css';

const routing = (
    <Router>
        <div>
            <div class="navbar">
                <div id="navbarLinks">
                    <NavLink activeClassName="active" to="/home">Home</NavLink>
                    <NavLink activeClassName="active" to="/about">About</NavLink>
                    <NavLink activeClassName="active" to="/projects">Projects</NavLink>
                    <NavLink activeClassName="active" to="/journey">Journey</NavLink>
                </div>
            </div>
            <Route path="/" component={App} />
            <Switch>
                <Route exact path="/home" component={Home} />
                <Route path="/about" component={About} />
                <Route path="/projects" component={Projects} />
                <Route path="/journey" component={Journey} />
                <Route component={ErrorMsg} />
            </Switch>
        </div>
    </Router>
)

function Navbar() {
    return routing;
}


