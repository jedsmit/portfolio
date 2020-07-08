import React from 'react'
//STYLE
import './project.css'
function Project(props) {
    return (
        <div className='project card mx-auto'>
            <div className="row no-gutters">
                <div class="col-md-4 project-image">
                    <img src={props.imageSrc} className="card-img-top" alt={props.imageAlt} />
                </div>
                <div className='col-md-8'>
                    <div className="card-body">
                        <h5 className="card-title">{props.title}</h5>
                        <p className="card-text">{props.description}</p>
                        <a className='github-link' href={props.githubLink}>{props.githubIcon}</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Project
