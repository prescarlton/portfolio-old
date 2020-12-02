import React from 'react';
import MediaQuery from 'react-responsive';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import MobileNavBar from '../components/molecules/MobileNavBar';
import NavBar from '../components/molecules/NavBar';
import About from '../components/pages/About';
import Home from '../components/pages/Home';
import Projects from '../components/pages/Projects';

const AppRouter = () => {
    return (
        <Router>
            <MediaQuery query='(min-width: 1224px)'>
                <NavBar/>
            </MediaQuery>
            <MediaQuery query='(max-width: 1224px)'>
                <MobileNavBar/>
            </MediaQuery>
            <Switch>
                <Route path="/about">
                    <About />
                </Route>
                <Route path="/projects">
                    <Projects />
                </Route>
                <Route path="/" exact>
                    <Home />
                </Route>
            </Switch>
        </Router>
    )
}

export default AppRouter;