import { NavLink } from 'react-router-dom';
const Lander = () => {

    return (
        <div className='lander'>
                <h1 className='site-header'>
                    Software Developer from Charleston, SC
                    with a passion for learning new things
                </h1>
                <h3 className='site-subheader'>Currently working as a Junior Software Developer at TIAG</h3>
                <NavLink className='button--solid highlight' to='/projects'>View Projects</NavLink>
        </div>
    )
}

export default Lander;