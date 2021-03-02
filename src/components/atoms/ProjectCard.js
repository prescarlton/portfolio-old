import React from 'react';
import { FiGithub } from 'react-icons/fi';
import { Link } from 'react-router-dom';
const ProjectCard = (props) => {
    return (
        <div className='projectCard'>
            <div className='projectCard__thumbWrapper'>
                <img className='projectCard__thumb' src={require(`./../../img/${props.id}_screenshot.png`).default} />
            </div>
            <div className='projectCard__content'>
                <h1>{props.name}</h1>
                <ul>
                    {props.tags.map(tag => {
                        return (
                            <>
                                <li>{tag}</li>
                                {props.tags[props.tags.length - 1] != tag && (<li>&middot;</li>)}
                            </>
                        )
                    })}
                </ul>
                <a target='_blank' href={`https://www.github.com/${props.links.github}`}>
                    <FiGithub className='projectCard__icon' />
                </a>
                {props.featured && (
                    <div className='projectCard__featuredBanner'>Featured</div>
                )}
            </div>
        </div>
    )
}

export default ProjectCard;