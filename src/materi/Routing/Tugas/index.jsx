import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Styling from '../../ComponentStyling';
// import Main from '../../Hook';
import Home from './Home/home';
import Nav from './Navigation/nav';

import './index.css';
import ValidateForm from '../../FormValidation';

const Routing = () => {
  return (
    <div>
      <Router>
        <Nav />
        <div className='main'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/registrasi' element={<ValidateForm />} />
            <Route path='/profile' element={<Styling />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
};

export default Routing;
