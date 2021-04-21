import React from 'react';

import CardDeck from 'react-bootstrap/CardDeck';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const NoteList = props => {
  return(
    <CardDeck>
      {props.notes.map(note => (
        <Card 
          key={note.id} 
          style={{ minWidth: '30rem', maxWidth: '40rem', marginBottom: '10px' }}
        >
          <Card.Body>
            <Card.Subtitle className="mb-4 text-muted">{note.category}</Card.Subtitle>
            <Card.Title style={{ fontSize: '24px' }}>{note.title}</Card.Title>
            <Card.Text>{note.body}</Card.Text>
            <Button 
              variant="danger" 
              size="sm" 
              style={{ float: 'right' }} 
              className="float-right"
              onClick={props.onRemoveItem.bind(this, note.id)}
            >
              Delete note
            </Button>
          </Card.Body>
        </Card>
      ))}
    </CardDeck>
  );
};

export default NoteList;
