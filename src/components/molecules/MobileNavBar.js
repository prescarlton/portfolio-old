import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

const MobileNavBar = () => {

    const [renderNavDrawer, setRenderNavDrawer] = useState(false);

    return (
        <>
            {!renderNavDrawer ? (
                <nav className='navbar--mobile'>
                    <ul className='navbar__linkGroup--mobile'>
                        <li className='linkGroup__link highlight bold'><NavLink activeClassName='active' to='/'>Preston Carlton</NavLink></li>
                        {/* <li onClick={() => { setRenderNavDrawer(true) }}>hi</li> */}
                        <AiOutlineMenu className='linkGroup__icon' onClick={() => { setRenderNavDrawer(true) }} />
                    </ul>

                </nav>
            ) : (
                    <div className='navbar__drawer'>
                        <div className='drawer__topRow'>
                            <AiOutlineClose className='navbar__drawer__icon' onClick={() => setRenderNavDrawer(false)} />
                        </div>
                        <div className='navbar__drawer__linkGroup'>
                            <NavLink activeClassName='active' onClick={() => setRenderNavDrawer(false)} to='/' exact>Home</NavLink>
                            <NavLink activeClassName='active' onClick={() => setRenderNavDrawer(false)} to='/about'>About</NavLink>
                            <NavLink activeClassName='active' onClick={() => setRenderNavDrawer(false)} to='/projects'>Projects</NavLink>
                            <NavLink activeClassName='active' onClick={() => setRenderNavDrawer(false)} to='/resume'>Resume</NavLink>
                        </div>
                    </div>
                )}
        </>


    );
};

export default MobileNavBar