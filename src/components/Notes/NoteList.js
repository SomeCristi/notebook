import React from 'react';

import CardDeck from 'react-bootstrap/CardDeck';
import Card from 'react-bootstrap/Card';

const NoteList = props => {
  console.log(props.notes);
  if(props.notes) {
    return(
      <CardDeck>
        {props.notes.map(note => (
          <Card key={Math.random()} style={{ minWidth: '30rem', maxWidth: '50rem', marginBottom: '10px' }}>
            <Card.Body>
              <Card.Subtitle className="mb-4 text-muted">{note.category}</Card.Subtitle>
              <Card.Title style={{ fontSize: '24px' }}>{note.title}</Card.Title>
              <Card.Text>{note.body}</Card.Text>
            </Card.Body>
          </Card>
        ))}
      </CardDeck>
    );
  }
  else {
    return (<p>You have no notes</p>);
  }
};

export default NoteList;
