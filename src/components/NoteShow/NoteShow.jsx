import AddNote from '../AddNote/AddNote';
import * as noteService from '../../services/noteService'
import { Link } from 'react-router-dom';



const NoteShow = ({user, notes, setNotes, handleDeleteNote}) => {


  const handleAddNote = async (noteData) => {
    const newNote = await noteService.addNote(noteData)
    console.log(noteData, 'handleaddnote in noteshow')
    setNotes([...notes, newNote])
    console.log(notes, 'NOTES IN STATE')
  }

  return (
    <>
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
      <AddNote handleAddNote={handleAddNote} notes={notes} setNotes={setNotes} user={user} />
    </>
  )
}

export default NoteShow;