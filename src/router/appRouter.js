import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import NavBar from '../components/molecules/NavBar';
import About from '../components/pages/About';
import Home from '../components/pages/Home';
import Projects from '../components/pages/Projects';

const AppRouter = () => {
    return (
        <Router>
            <NavBar />
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