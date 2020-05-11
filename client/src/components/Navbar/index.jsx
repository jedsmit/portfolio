import React from 'react';
import { Link } from 'react-router-dom';
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-solid-svg-icons'





function Navbar() {


    return (


        <nav className="navbar navbar-expand-sm bg-dark mx-auto px-4 border-bottom">

            <div className="navbar-brand text-white mx-1 pr-4" style={{ "font-size": "2em" }} > jed smit | web development</div>

            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                <ul className="navbar-nav">

                    <li className="nav-item">
                        <Link to="/" className="nav-link text-white">home</Link>
                    </li>

                    <li className="nav-item">
                        <Link to="/resume" className="nav-link text-white">resume</Link>
                    </li>

                    <li className="nav-item">
                        <Link to='/contact' className="nav-link text-white">contact</Link>
                    </li>

                    <li className="nav-item">
                        <a className="nav-link text-white" href="https://github.com/jedsmit">
                            <FontAwesomeIcon icon={['fab', 'github']} />
                        </a>
                    </li>

                    <li className="nav-item">
                        <a className="nav-link text-white" href="https://www.linkedin.com/in/jed-smit-6795ba89">
                            <FontAwesomeIcon icon={['fab', 'linkedin']} style={{ "font-size": "1.5em", "color": "white" }} /></a>
                    </li>

                </ul>

            </div>
        </nav>

    )
}

export default Navbar
