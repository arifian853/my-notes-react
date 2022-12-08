import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';


export const NoteStructures = ({id, createdAt, title, body}) => {
  return (
    <div className='note-structure'>
        <h1><Link to={`notes/${id}`}>{title}</Link></h1>
        <hr />
        <span>Created at : {createdAt}</span> <br />
        <span>ID : {id}</span>
        <hr />
        <div className="note-body">
            <p>{body}</p>
        </div>
        <hr />
        
    </div>
  )
}
NoteStructures.propTypes = {
  id: PropTypes.number.isRequired,
  createdAt: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired
};