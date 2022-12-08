import React, {useState, useEffect} from 'react';
import { NoteList } from './NoteList';
import {getActiveNotes} from '../utils/auth';
import AddNote from './AddNote';

const NoteApp = () => {
  const [notes, setNotes] = useState([]);

  useEffect (() => {
    getActiveNotes().then(({ data }) => {
      setNotes(data);
    });
  }, []);

  async function onDeleteHandler(id) {
    const notes = this.state.notes.filter(note => note.id !== id);
    
    this.setState({ notes });
  }

    return (
        <>
        <div className="main">
            <div className='notes-app-wrapper'>
            <AddNote />
              <div className="notes-app">
                <h1>Daftar Catatan</h1>
                <hr />
                <br />
                <div className="note-item-wrapper">
                {
                   notes.length !== 0 ? (
                      <NoteList notes={notes} onDelete={onDeleteHandler} />
                    ) : (
                      <p className='prompt'>Tidak ada catatan</p>
                    )
                    
                }
                </div>
              </div>
            </div>
        </div>
        </>
      );
  }

export default NoteApp;