import React, { useState } from 'react';
import ListNotes from './ListNotes';
import history from '../../history';
import NoteForm from '../NoteForm';

const LandingPage = ({ notes, createNewNote }) => {
  const [showNoteForm, setShowNoteForm] = useState(false);

  let allNotes = notes.map(note => {
    return <ListNotes note={note} history={history} />
  });

  let pageView;
  if (showNoteForm) {
    pageView = (
      <React.Fragment>
        <button type="button" onClick={() => setShowNoteForm(false)}>Back</button>
        <NoteForm 
          header="Create new note" 
          button="Create"
          createNewNote={createNewNote} 
        />
      </React.Fragment>
    );
  } else {
    pageView = (
      <div>
        <h3>Here are all your notes!</h3>
        <button type="button" onClick={() => setShowNoteForm(true)}>Create New Note!</button>
        <br/><br/>
        {allNotes}
      </div>
    );
  }

  return (
    <React.Fragment>
      {pageView}
    </React.Fragment>
  );
};

export default LandingPage;