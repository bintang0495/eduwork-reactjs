import React from 'react';
import '../index.css';
import { IoIosHome } from 'react-icons/io';
import { ImNewspaper } from 'react-icons/im';
import { FaUserFriends } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <div className='sidebar'>
      <Link to='/'>
        <IoIosHome /> Home
      </Link>
      <Link to='/news'>
        <ImNewspaper /> News
      </Link>
      <Link to='/profile'>
        <FaUserFriends /> Profile
      </Link>
    </div>
  );
};

export default Nav;
