import React from 'react';
import { Link } from 'react-router-dom';
import { FiHome, FiLogOut } from 'react-icons/fi';
import PropTypes from 'prop-types';


export const Navbar = ({ logout, name }) => {
  return (
        <div className='navigation-logout'>
            <ul>
              <li><Link to="/"><span><FiHome /></span></Link></li>
              <li><button onClick={logout}> <FiLogOut /> {name}</button></li>
            </ul>
        </div>
  )
}

Navbar.propTypes = {
  logout: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired, 
};
