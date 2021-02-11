import React from 'react';
import ProjectCard from '../atoms/ProjectCard';

const projectList = [
    {
        name: 'tido',
        description: 'A super nifty productivity webapp with a React-native port currently in the works.'
    },
    {
        name: 'Box-Set',
        description: 'A tool to manage my super legal collection of movies/tv shows.'
    },
    {
        name: 'Vuedal',
        description: 'A super simple/lightweight modal component for Vue.js'
    },
    {
        name: 'Top 100',
        description: 'A Python script to get the top 100 movies of all time, based on rankings from 15+ popular media outlets. A Python script to get the top 100 movies of all time, based on rankings from 15+ popular media outlets'
    }
]

const Projects = () => {
    return (
        <div className='page'>
            <div className='projectList'>
                {
                    projectList.map(project => (
                        <ProjectCard {...project} />
                    ))
                }
            </div>
        </div>
    )
}

export default Projects;