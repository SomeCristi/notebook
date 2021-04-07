import React, { useState } from 'react';

import Card from '../UI/Card';
import './NoteForm.css';

const NoteForm = props => {
  const [ title, setTitle] = useState('');
  const [ body, setBody] = useState('');

  return (
    <section className="note-form">
      <Card>
        <form onSubmit={submitHandler}>
          <div className="form-control">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              id="title"
              value={title}
              onChange={event => {
                setTittle(event.target.value)
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