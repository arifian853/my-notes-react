import React from 'react';
import { NoteItems } from './NoteItems';
import PropTypes from 'prop-types';

export const NoteList = ({notes, onDelete}) => {
  return (
    <div className='note-list'>
         {
       notes.map((note) => (
         <NoteItems key={note.id} id={note.id} onDelete={onDelete} {...note} />
       ))
     }
    </div>
  )
}
NoteItems.propTypes = {
  notes: PropTypes.arrayOf(PropTypes),
  onDelete: PropTypes.func.isRequired
};