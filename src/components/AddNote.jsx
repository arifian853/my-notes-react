import React from 'react';
import { NoteInsert } from './NoteInsert';
import { addNote } from '../utils/auth';

function AddNote() {
  async function onAddNoteHandler(note) {
    await addNote(note);
  }
 
  return (
    <div className="notes-app-input">
          <h1>Tambah Note</h1>
          <hr />
          <br />
          <NoteInsert addNote={onAddNoteHandler} />
    </div>
  )
}

export default AddNote