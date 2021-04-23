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
    axios
      .post('/notes.json', note)
      .then(response => {
        this.setState(() => ({
          notes: [...this.state.notes, { id: response.data.name, ...note }]
        }));
      })
      .catch(err => {
        console.log(err);
      });
  };

  removeNoteHandler = noteId => {
    axios
      .delete(`/notes/${noteId}.json`)
      .then(() => {
        this.setState(prevState=> ({
          notes: prevState.notes.filter(note => note.id !== noteId)
        }));
      })
      .catch(err => {
        console.log(err);
      })
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