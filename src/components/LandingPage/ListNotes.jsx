import React from 'react';

const ListNotes = ({ note, history }) => {
  return (
    <div 
      key={note.id} 
      onClick={() => history.push(`/viewNote/${note._id}`)}
    >
      <h3>{note.title}</h3>
      <p>{note.content}</p>
    </div>
  );
};

export default ListNotes;