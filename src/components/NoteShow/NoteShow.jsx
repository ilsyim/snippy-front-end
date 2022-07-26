import EditNote from '../../components/EditNote/EditNote'
import AddNote from '../AddNote/AddNote';
import { useState, useEffect } from 'react';
import * as noteService from '../../services/noteService'
import { useLocation,Link } from 'react-router-dom';



const NoteShow = ({user, notes, setNotes, handleDeleteNote}) => {
  const location = useLocation()

  const handleAddNote = async (noteData) => {
    const newNote = await noteService.addNote(noteData)
    console.log(noteData, 'handleaddnote in noteshow')
    setNotes([...notes, newNote])
    console.log(notes, 'NOTES IN STATE')
  }

  return (
    <>
    <h1>
      {notes.content}
    </h1>

      {notes.length?
      <>
        <h2>Note Details</h2>
          {notes.map((note, idx) => 
          <div key={idx}>
            <>
            {user?.profile === note.owner._id &&
              <>
                <Link to='/edit' state={{note}}>Edit</Link>
                <button onClick={() => handleDeleteNote(note._id)}>Delete</button>
                <div>
                  {note.content}
                </div>
              </>
            }
            </>
          </div>
          )}
      </>
      :
        <AddNote handleAddNote={handleAddNote} notes={notes} setNotes={setNotes} user={user} />
      }
      
    </>
  );
}

export default NoteShow;