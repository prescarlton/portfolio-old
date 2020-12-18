import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

const MobileNavBar = () => {

    const [renderNavDrawer, setRenderNavDrawer] = useState(false);

    return (
        <TransitionGroup component={null}>
            {!renderNavDrawer ? (
                <nav className='navbar--mobile'>
                    <ul className='navbar__linkGroup--mobile'>
                        <li className='linkGroup__link highlight bold'><NavLink activeClassName='active' to='/'>Preston Carlton</NavLink></li>
                        {/* <li onClick={() => { setRenderNavDrawer(true) }}>hi</li> */}
                        <AiOutlineMenu className='linkGroup__icon' onClick={() => { setRenderNavDrawer(true) }} />
                    </ul>
                </nav>
            ) : (
                    <CSSTransition classNames="navbar__drawer" timeout={400}>
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
                    </CSSTransition>
                )}
        </TransitionGroup>


    );
};

export default MobileNavBar