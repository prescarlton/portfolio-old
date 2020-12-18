import React from 'react';
import { NavLink } from 'react-router-dom';

const Home = () => {
    return (
        <div className='page home'>
            <h1 className='site-header highlight'>hey,</h1>
            <h3 className='site-subheader'>I'm Preston.</h3>
            <p>Click that fancy lookin' button to check out what I'm working on. </p>
            <NavLink className='button--solid highlight' to='/projects'>Projects</NavLink>
        </div>
    )
}

export default Home;