import mePic from './../../img/me_and_gator.png';

const LanderOld = () => {
    return (
        <div className='landerOld'>
            <img src={mePic} alt='Preston Carlton' className='mePic' />
            <div className='words'>
                <h1 className='site-header highlight'>hey.</h1>
                <h3 className='site-subheader'>I'm Preston.</h3>
                <p>Click that fancy lookin' button down there to check out what I'm working on. </p>
                <NavLink className='button--solid highlight' to='/projects'>Projects</NavLink>
            </div>
        </div>
    )
}

export default LanderOld;