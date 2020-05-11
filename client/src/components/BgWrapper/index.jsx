import React from 'react'
import { BrowserRouter as Route } from 'react-router-dom';

//COMPONENTS
import Navbar from '../Navbar';
import Footer from '../Footer';
import Home from '../Home';
import Resume from '../Resume';
import Contact from '../Contact';

function BgWrapper() {
    return (
        <div className="container-fluid bgImage">

            <Navbar />

            <Route exact path="/" component={Home} />
            <Route exact path="/resume" component={Resume} />
            <Route exact path="/contact" component={Contact} />

            <Footer />

        </div>
    )
}

export default BgWrapper;
