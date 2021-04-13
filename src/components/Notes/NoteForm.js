import React, { useState } from 'react';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';

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
    <Form onSubmit={submitHandler}>
      <Form.Group as={Col} md="4" controlId='formBasicTitle'>
        <Form.Label>Title</Form.Label>
        <Form.Control
          required 
          type='text' 
          placeholder='Enter title'
          value={title}
          onChange={event => {
            setTitle(event.target.value)
          }} 
        />
      </Form.Group>

      <Form.Group as={Col} md="4" controlId='formBasicBody'>
        <Form.Label>Body</Form.Label>
        <Form.Control
          required 
          as="textarea"
          placeholder='Enter body'
          value={body}
          onChange={event => {
            setBody(event.target.value)
          }}
          aria-label="With textarea"
          rows={7}
        />
      
      </Form.Group>
      <Button type="submit">Submit form</Button>
    </Form>
  )
}

export default NoteForm;