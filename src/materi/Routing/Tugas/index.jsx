import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Styling from '../../ComponentStyling';
import Main from '../../Hook';
import Home from './Home/home';
import Nav from './Navigation/nav';

import './index.css';

const Routing = () => {
  return (
    <div>
      <Router>
        <Nav />
        <div className='main'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/news' element={<Main />} />
            <Route path='/profile' element={<Styling />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
};

export default Routing;
