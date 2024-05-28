import './App.css'
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import MainRouter from './main-router.jsx';




function App() {


  return (
   
      <Router>
        <MainRouter/>
        </Router>
    
  );
};

export default App
