import React from 'react';
import './App.css';
import { Router, Route } from 'react-router-dom';
import history from './history';
import LandingPage from './components/LandingPage/LandingPage';
import ViewNote from './components/ViewNote/ViewNote';
import { getAllNotes, createNote, deleteNote, updateNote } from './api';

class App extends React.Component {
  state = {
    notes: []
  }

  componentDidMount() {
    if (this.state.notes.length === 0) {
      this.fetchAllNotes();
    }
  }

  componentDidUpdate(prevState) {
    if (prevState.notes !== this.state.notes) {
      this.fetchAllNotes();
    }
  }

  fetchAllNotes() {
    getAllNotes()
      .then(res => {
        if (res.status === 200) {
          this.setState({notes: [...res.data]});
        }
      })
      .catch(e => console.log(e));
  };

  createNewNote(title, content, callback) {
    createNote(title, content)
      .then(res => {
        if (res.status === 201) {
          window.alert('Your note has been successfully created.');
          callback();
        }
      })
      .catch(e => console.log(e));
  };

  updateSpecificNote(id, title, content, callback) {
    updateNote(id, title, content)
      .then(res => {
        if (res.status === 204) {
          window.alert('Your note has successfully updated.');
          callback();
        }
      })
      .catch(e => console.log(e));
  };

  deleteSpecificNote(id, callback) {
    deleteNote(id)
      .then(res => {
        if (res.status === 204) {
          window.alert('Your note has been successfully deleted.');
          callback();
        }
      })
      .catch(e => console.log(e));
  };

  render() {
    const { notes } = this.state;

    return (
      <div className="App">
        <h1>Notes App</h1>
        <Router history={history}>
          <Route 
            exact path="/"
            render={(props) => <LandingPage {...props} notes={notes} createNewNote={this.createNewNote} />}
          />
          <Route 
            exact path="/viewNote/:id"
            render={(props) => <ViewNote {...props} updateSpecificNote={this.updateSpecificNote} deleteSpecificNote={this.deleteSpecificNote} history={history}/>}
          />
        </Router>
      </div>
    );
  }
};

export default App;
