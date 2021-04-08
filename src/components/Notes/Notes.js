import React, { useState } from 'react';

import NoteForm from './NoteForm'

const Notes = () => {
  const [ notes, setNotes ] = useState([]);
  const addNoteHandler = note => {
    setNotes(prevNotes => [...prevNotes, note]);
  };

  return (
    <section>
      <div>
      <NoteForm addNote={addNoteHandler}/>
      </div>

      <div>
        <ul>
          <li>ceva</li>
          {notes.map(note => (
            <li key={note.title}>
              {note.title + " " +  note.body}
            </li>
          ))}  
        </ul>
      </div>
    </section>
  );
}

export default Notes;