import React from 'react';
import { BiArrowBack } from 'react-icons/bi';
import { Link } from 'react-router-dom';

export const NotFoundPage = () => {
  return (
    <div>
        <br /><br />
        <div className="notes-details">
        <Link to="/"> <button className='back-btn'> <BiArrowBack /> </button></Link>
            <h1>404</h1> <hr /> 
            <h1>PAGE NOT FOUND</h1>
        </div>
    </div>
  )
}
