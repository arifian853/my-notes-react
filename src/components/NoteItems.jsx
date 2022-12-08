import React from 'react';
import { NoteStructures } from './NoteStructures';
import { DeleteButton } from './DeleteButton';
import PropTypes from 'prop-types';

export const NoteItems = ({id, createdAt, title, body, onDelete}) => {
  return (
    <div className='notes'>
        <NoteStructures id={id} createdAt={createdAt} title={title} body={body} />
        <br />
        <DeleteButton id={id} onDelete={onDelete} />
    </div>
  )
}
NoteItems.propTypes = {
  id: PropTypes.number.isRequired,
  createdAt: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired
};