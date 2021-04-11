import React from 'react';

const NoteList = props => {
  return(
    <div class="card-deck">
      {props.notes.map(note => (
        <div class="card" style={{width: "18rem"}}>
          <div class="card-body">
            <h5 class="card-title">{note.title}</h5>
            <p class="card-text">{note.body}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default NoteList;