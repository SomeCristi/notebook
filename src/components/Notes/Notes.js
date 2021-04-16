import React, { Component } from 'react';

import NoteForm from './NoteForm';
import NoteList from './NoteList';
import axios from '../../axios-notes';

class Notes extends Component {
  state = { notes: null };

  componentDidMount() {
    axios.get('/notes.json')
      .then(response => {
        this.setState( { notes: response.data} )
      })
      .catch(error => {});
  }
  
  addNoteHandler = note => {
    axios.post('/notes.json', note);
    this.setState(prevNotes => ({
      notes: [...this.state.notes, note]
    }));
  };

  return() {
    <section>
      <div>
      <NoteForm addNote={this.addNoteHandler}/>
      </div>
      <div>
        <NoteList notes={this.state.notes}/>
      </div>
    </section>
  };
}

export default Notes;