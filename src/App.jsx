import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import MainRouter from './main-router.jsx';




function App() {
  const [count, setCount] = useState(0)

  return (
   
      <Router>
        <MainRouter/>
        </Router>
    
  );
};

export default App
