import React from 'react';
import ReactDOM from 'react-dom';
import { 
    Route, 
    NavLink, 
    BrowserRouter as Router, 
    Switch 
} from 'react-router-dom';
import './index.css';
import './components/navigation-bar/navigation-bar.css';
import App from './components/App/App';
import Home from './components/home-page/home';
import About from './components/about-page/about';
import Contact from './components/contact/contact';
import Navbar from './components/navigation-bar/navigation-bar';
import ErrorMsg from './components/error-page/error-page';
import * as serviceWorker from './serviceWorker';

const routing = (
    <Router>
        <div>
            <div class="navbar">
                <div id="navbarLinks">
                    <NavLink activeClassName="active" to="/home">Home</NavLink>
                    <NavLink activeClassName="active" to="/about">About</NavLink>
                    <NavLink activeClassName="active" to="/contact">Contact</NavLink>
                </div>
            </div>
            <Route path="/" component={App} />
            <Switch>
                <Route exact path="/home" component={Home} />
                <Route path="/about" component={About} />
                <Route path="/contact" component={Contact} />
                <Route component={ErrorMsg} />
            </Switch>
        </div>
    </Router>
)


ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
