import React from 'react';
import { NavLink, Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <nav className='navbar'>
            <ul className='navbar__linkGroup'>

                <li className='linkGroup__link highlight bold'><NavLink activeClassName='active' to='/'>Preston Carlton</NavLink></li>
            </ul>
            <ul className='navbar__linkGroup'>
                <li className='linkGroup__link'><NavLink activeClassName='active' to='/' exact>Home</NavLink></li>
                <li className='linkGroup__link'><NavLink activeClassName='active' to='/about'>About</NavLink></li>
                <li className='linkGroup__link'><NavLink activeClassName='active' to='/projects'>Projects</NavLink></li>
                <li className='linkGroup__link button--outline highlight'>Resume</li>
            </ul>
        </nav>
    );
};

export default NavBar