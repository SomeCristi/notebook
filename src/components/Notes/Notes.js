import React from 'react';

const Notes = () => {
  notes = [];
  
  addNoteHandler = note => {
    notes << note;
  };

  return (
    <NoteForm submitHandler={addNoteHandler}/>
  );
}