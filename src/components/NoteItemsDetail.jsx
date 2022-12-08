import React from 'react';
import { DeleteButton } from './DeleteButton';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { BiArrowBack } from "react-icons/bi";

export const NoteItemsDetail = ({id, createdAt, title, body, onDelete}) => {
  return (
<div>
<div className="notes-details">
  <Link to="/">
    <button className="back-btn">
      <BiArrowBack />{" "}
    </button>
  </Link>
  <h1>{title}</h1>
  <hr />
  <p>Created at : {createdAt}</p>
  <p>ID : {id}</p>
  <hr />
  <h3>{body}</h3>
  <hr />
  <DeleteButton id={id} onDelete={onDelete} />
</div>
</div>
  )
}
NoteItemsDetail.propTypes = {
  id: PropTypes.number.isRequired,
  createdAt: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired
};