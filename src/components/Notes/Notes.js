import React from 'react';

import NoteForm from './NoteForm';
import NoteList from './NoteList';
import axios from '../../axios-notes';

class Notes extends React.Component {
  state = { notes: [] };

  // NU MERGE ASTA
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
    this.setState(prevNotes => ({
      notes: [...this.state.notes, note]
    }));
  };

  render(){
    return (
      <section>
        <div>
        <NoteForm addNote={this.addNoteHandler}/>
        </div>
        <div>
          <NoteList notes={this.state.notes}/>
        </div>
      </section>
    )
  };
}

export default Notes;