import React, { useState } from 'react';

import Card from '../UI/Card';
import './NoteForm.css';

const NoteForm = props => {
  const [ title, setTitle] = useState('');
  const [ body, setBody] = useState('');

  const submitHandler = event => {
    // prevent the form from being submitted because otherwise it will refresh the page
    // and the state from notes will be lost
    event.preventDefault();
    props.addNote({title: title, body: body})
  };


  return (
    <section className="note-form">
      <Card>
        {/* a function must be passed to onSubmit */}
        <form onSubmit={submitHandler}>
          <div className="form-control">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              id="title"
              value={title}
              onChange={event => {
                setTitle(event.target.value)
              }}
            />
          </div>
          <div className="form-control">
            <label htmlFor="body">Body</label>
            <input
              type="text"
              id="body"
              value={body}
              onChange={event => {
                setBody(event.target.value)
              }}
            />
          </div>
          <div className="note-form_actions">
            <button type="submit">Create note</button>
          </div>
        </form>
      </Card>
    </section>
  )
}

export default NoteForm;