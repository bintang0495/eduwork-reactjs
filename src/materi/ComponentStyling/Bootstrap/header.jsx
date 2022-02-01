import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import './index.scss';

export default class Header extends React.Component {
  render() {
    return (
      <div className='p-5 mb-4 bg-light rounded-3 jumbotron'>
        <div className='container-fluid py-5 text-center'>
          <p className='fs-5 fst-italic mt-5'>Software Engineering</p>
          <h1 className='display-4'>Bintang Muhamad Akbar</h1>
          <form action='https://www.linkedin.com/in/bintang-muhamad-akbar-931630122/'>
            <Button
              type='submit'
              formtarget='_blank'
              variant='danger'
              className='btn border border-dark btn-sm mt-5 shadow-sm text-white px-3 py-2'>
              LinkedIn Profile
            </Button>
          </form>
        </div>
      </div>
    );
  }
}
