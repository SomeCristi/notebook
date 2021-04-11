import React from 'react';
import CardDeck from 'react-bootstrap/CardDeck';
import Card from "react-bootstrap/Card";

const NoteList = props => {
  return(
    <CardDeck>
      {props.notes.map(note => (
        <Card style={{ width: '18rem' }}>
          <Card.Body>
          <Card.Title>{note.title}</Card.Title>
          <Card.Text>{note.body}</Card.Text>
            </Card.Body>
        </Card>
      ))}
    </CardDeck>
  );
};

export default NoteList;
