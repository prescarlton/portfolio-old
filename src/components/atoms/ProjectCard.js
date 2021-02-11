import React from 'react';

const ProjectCard = (props) => {
    return (
        <div className='projectCard'>
            <h1>{props.name}</h1>
            <p>{props.description}</p>
        </div>
    )
}

export default ProjectCard;