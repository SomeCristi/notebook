import React, { useState } from 'react';

import NoteForm from './NoteForm';
import NoteList from './NoteList';

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
        <NoteList notes={notes}/>
      </div>
    </section>
  );
}

export default Notes;