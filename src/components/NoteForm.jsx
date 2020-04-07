import React, { useState } from 'react';

const NoteForm = ({ header, button, createNewNote, updateNote, id, updateNoteTitle, updateNoteContent }) => {
  const [title, setTitle] = useState(updateNoteTitle ? updateNoteTitle : '');
  const [content, setContent] = useState(updateNoteContent ? updateNoteContent : '');

  const onSubmit = (e, title, content) => {
    e.preventDefault();
    if (createNewNote) {
      createNewNote(title, content, () => window.location.reload());
    } else {
      updateNote(id, title, content, () => window.location.reload());
    }
  };
  
  return (
    <div>
      <h3>{header}</h3>
      <form onSubmit={e => onSubmit(e, title, content)}>
        <input 
          type="text" 
          placeholder="Enter title" 
          onChange={e => setTitle(e.target.value)} 
          value={title} 
        /><br/>
        <input 
          type="text" 
          placeholder="Enter content" 
          onChange={e => setContent(e.target.value)} 
          value={content} 
        /><br/>
        <button type="submit">{button}</button>
      </form>
    </div>
  );
};

export default NoteForm;