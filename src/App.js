import React, { Component } from 'react';
import { API, graphqlOperation } from 'aws-amplify';
import { withAuthenticator } from 'aws-amplify-react';
import { createNote, updateNote, deleteNote } from './graphql/mutations';
import { listNotes } from './graphql/queries';

class App extends Component {
  state = {
    id: "",
    note: "",
    notes: []
  }

  async componentDidMount() {
    const result = await API.graphql(graphqlOperation(listNotes));
    this.setState({ notes: result.data.listNotes.items});
  }

  inputNote = event => this.setState({ note: event.target.value })

  existingNote = () => {
    const { notes, id } = this.state;
    if (id) {
      const isNote = notes.findIndex(note => note.id === id) > -1
      return isNote;
    } 
      return false;

  }

  addNote = async event => {
    const { note, notes } = this.state;
    event.preventDefault();
    if (this.existingNote()) {
      this.update();
    } else {
    const input = { note };
    const result = await API.graphql(graphqlOperation(createNote, { input }));
    const listNote = result.data.createNote;
    const newNotes = [listNote, ...notes];
    this.setState({ notes: newNotes, note: "" });
    }
  };

  update = async () => {
    const { notes, id, note } = this.state;
    const input = { id, note };
    const result = await API.graphql(graphqlOperation(updateNote, { input }));
    const updatedNote = result.data.updateNote;
    const index = notes.findIndex(note => note.id === updatedNote.id);
    const updatedNotes = [
      ...notes.slice(0, index),
      updatedNote,
      ...notes.slice(index + 1)
    ]
    this.setState({ notes: updatedNotes, note: "", id: ""});
  }

  delete = async noteID => {
    const { notes } = this.state;
    const input = { id: noteID };
    const result = await API.graphql(graphqlOperation(deleteNote, { input }));
    const deletedNoteID = result.data.deleteNote.id;
    const updatedNotes = notes.filter(note => note.id !== deletedNoteID);
    this.setState({ notes: updatedNotes });
  }

  setNote = ({ note, id }) => this.setState({ note, id });

  render() {
    const { id, notes, note } = this.state

    return (
      <div className="flex flex-column items-center justify-center bg-light-green pa3 mr2">
      <h1 className="dark-green f2">Amplify Notetaker</h1>

      {/* Note Form */}
      <form onSubmit={this.addNote} className="flex justify-center">
      <input value={ note } className="mr1 pa2 mb2" type="text"
      onChange={this.inputNote} placeholder="Write your note" />
      <button className="pa2 f6 link dim ph3 pv2 mb2 dib white bg-dark-blue" type="submit">{ id ? "Update Note" : "Add Note" }</button>
      </form>

      {/* Notes List */}
      <div>

        {notes.map(item => (
          <div key={item.id} className="flex dark-blue items-center">
            <li onClick={() => this.setNote(item)} className="list pl0 mt3 mr2 f2">
              {item.note}
            </li>

            <button onClick={() => this.delete(item.id)} className="mt3 bg-transparent bw0 f3">
            <span>&times;</span>
            </button>

          </div>
        ))}
      </div>

      </div>
    );
  }
}

// const theme = {
//   ...AmplifyTheme,
//   navBar: {
//     ...AmplifyTheme.navBar,
//     backgroundColor: "#FFDFDF"
//   }
// };

export default withAuthenticator(App, true);
