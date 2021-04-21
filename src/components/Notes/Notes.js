import React from 'react';

import NoteForm from './NoteForm';
import NoteList from './NoteList';
import axios from '../../axios-notes';

class Notes extends React.Component {
  state = { notes: [] };

  // ERROR HANDLING si SPINNER gasesti la hooks ep 19
  componentDidMount() {
    axios.get('/notes.json')
      .then(response => {
        console.log(response.data);
        const loadedNotes = [];
        for (const key in response.data) {
          loadedNotes.push({
            id: key,
            title: response.data[key].title,
            category: response.data[key].category,
            body: response.data[key].body,
          });
        }
        this.setState({ notes: loadedNotes});
      })
      .catch(error => {});
  }
  
  addNoteHandler = note => {
    axios.post('/notes.json', note);
    this.setState(() => ({
      notes: [...this.state.notes, note]
    }));
  };

  removeNoteHandler = noteId => {
    axios.delete('/notes.json', noteId);
    this.setState(() => ({
      notes: this.state.notes.filter(note => note.id !== noteId)
    }));
  };

  render(){
    return (
      <section>
        <div>
        <NoteForm onAddNote={this.addNoteHandler}/>
        </div>
        <div>
          <NoteList 
            notes={this.state.notes}
            onRemoveItem={this.removeNoteHandler}
          />
        </div>
      </section>
    )
  };
}

export default Notes;