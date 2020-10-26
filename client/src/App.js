import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';

//COMPONENTS

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import Resume from './components/Resume';
import Contact from './components/Contact';

//FontAwesome
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
library.add(fab);


function App() {
  return (
    <Router>

      <Navbar />

      <Route exact path="/" component={Home} />
      <Route exact path="/resume" component={Resume} />
      <Route exact path="/contact" component={Contact} />

      <Footer />

    </Router>

  )
}

export default App;
