import React, { useState, useEffect } from 'react';
import { getNoteById } from '../../api';
import NoteForm from '../NoteForm';

const ViewNote = ({ match: { params: { id } }, deleteSpecificNote, updateSpecificNote, history }) => {
  const [note, setNote] = useState(null);
  const [showNoteForm, setShowNoteForm] = useState(false);
  
  useEffect(() => {
    getNoteById(id)
      .then(res => {
        if (res.status === 200) {
          setNote(res.data);
        }
      })
      .catch(e => console.log(e));
  }, [id]);

  let pageView;
  if (!showNoteForm && note !== null) {
    pageView = (
      <div>
        <h3>{note.title}</h3>
        <p>{note.content}</p>
        <button 
          type="button"
          onClick={() => setShowNoteForm(true)}
        >
          Update Note
        </button>
        <button 
          type="button" 
          onClick={() => deleteSpecificNote(id, () => history.push('/'))}
        >
          Delete Note
        </button>
      </div>
    );
  }

  if (showNoteForm) {
    pageView = (
      <React.Fragment>
        <button type="button" onClick={() => setShowNoteForm(false)}>Back</button>
        <NoteForm 
          header="Update your note"
          button="Update"
          id={id}
          updateNote={updateSpecificNote}
          updateNoteTitle={note.title}
          updateNoteContent={note.content}
        />
      </React.Fragment>
    );
  }

  if (note === null) {
    pageView = null;
  }
  
  return (
    <React.Fragment>
      {pageView}
    </React.Fragment>
  );
};

export default ViewNote;