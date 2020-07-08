import React from 'react'
import { projects } from './projects';

//COMPONENTS
import Project from '../Project'
//STYLE
import './projectContainer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-solid-svg-icons'


function ProjectContainer() {



    return (

        < div className='projectContainer container-fluid mx-auto' >

            <p className='text-center' style={{ "fontSize": "2em" }}>projects</p>
            <div className="row">

                {projects.map(project => {
                    console.log(project)
                    return <Project
                        key={project.title}
                        title={project.title}
                        githubIcon={<FontAwesomeIcon icon={['fab', 'github']} />}
                        githubLink={`https://github.com/jedsmit/${project.title}`}
                        description={project.description}
                        imageAlt={`${project.title} + image`}
                        imageSrc={project.imageSrc}
                    />
                })}
            </div>

        </div >
    )
}

export default ProjectContainer
