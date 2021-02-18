import React from 'react';
import ProjectCard from '../atoms/ProjectCard';

const projectList = [
    {
        name: 'tido',
        id: 'tido',
        description: 'A super nifty productivity webapp with a React-native port currently in the works.',
        tags: [
            'React.js',
            'AWS'
        ],
        links: {
            github: 'prescarlton/tido'
        }
    },
    {
        name: 'Box-Set',
        id: 'boxset',
        description: 'A tool to manage my super legal collection of movies/tv shows.',
        tags: [
            'Python'
        ],
        links: {
            github: 'prescarlton/box-set'
        }
    },
    {
        name: 'Vuedal',
        id: 'vuedal',
        description: 'A super simple/lightweight modal component for Vue.js',
        tags: [
            'Vue.js',
            'Node.js',
            'npm'
        ],
        links: {
            github: 'prescarlton/vuedal'
        }
    },
    {
        name: 'Top 100',
        id: 'top100',
        description: 'A Python script to get the top 100 movies of all time, based on rankings from 15+ popular media outlets.',
        tags: [
            'Python'
        ],
        links: {
            github: 'prescarlton/top-100'
        }
    }
]

const Projects = () => {
    return (
        <div className='projects'>
            <div className='projectList'>
                {
                    projectList.map(project => (
                        <ProjectCard {...project} key={project.id}/>
                    ))
                }
            </div>
        </div>
    )
}

export default Projects;