import React from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import ReactDOM from 'react-dom';

//COMPONENTS
import BgWrapper from './components/BgWrapper';

//FontAwesome
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
library.add(fab);


function App() {
  return (

    <Router>

      <BgWrapper />

    </Router>

  )
}

export default App;
