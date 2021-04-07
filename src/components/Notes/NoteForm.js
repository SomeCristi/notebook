import React, { useState } from 'react';

import Card from '../UI/Card';
import './NoteForm.css';

const NoteForm = React.memo(props => {
  const [ title, setTitle] = useState('');
  const [ body, setBody] = useState('');

  return (
    <section className="note-form">
      <Card>
        {/* a function must be passed to onSubmit */}
        <form onSubmit={() => props.addNoteHandler({body: body, title: title})}>
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
})

export default NoteForm;