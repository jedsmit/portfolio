import React from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

//style
import '../Navbar/navbar.css';


function Navbar() {


    return (


        <nav className="navbar navbar-expand-sm navbar-dark m-0 px-4 border-bottom">

            <div className="navbar-brand text-white mx-1 pr-4" style={{ "fontSize": "2em" }} > jed smit | web development</div>

            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                <ul className="navbar-nav">

                    <li className="nav-item">
                        <NavLink to="/" activeClassName='activeLink' className="nav-link text-white">home</NavLink>
                    </li>

                    <li className="nav-item">
                        <NavLink activeClassName='activeLink' to="/resume" className="nav-link text-white">resume</NavLink>
                    </li>

                    <li className="nav-item">
                        <NavLink activeClassName='activeLink' to='/contact' className="nav-link text-white">contact</NavLink>
                    </li>

                    <li className="nav-item">
                        <a className="nav-link text-white" href="https://github.com/jedsmit">
                            <FontAwesomeIcon className="font-awesome-icon" icon={['fab', 'github']} />
                        </a>
                    </li>

                    <li className="nav-item">
                        <a className="nav-link text-white" href="https://www.linkedin.com/in/jed-smit-6795ba89">
                            <FontAwesomeIcon icon={['fab', 'linkedin']} style={{ "fontSize": "1.25em", "color": "white" }} /></a>
                    </li>

                </ul>

            </div>
        </nav>

    )
}

export default Navbar;
