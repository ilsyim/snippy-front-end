import AddNote from '../AddNote/AddNote';
import * as noteService from '../../services/noteService'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashCan, faPencil } from '@fortawesome/free-solid-svg-icons'


const NoteShow = ({user, notes, setNotes, handleDeleteNote}) => {


  const handleAddNote = async (noteData) => {
    const newNote = await noteService.addNote(noteData)
    console.log(noteData, 'handleaddnote in noteshow')
    setNotes([...notes, newNote])
    console.log(notes, 'NOTES IN STATE')
  }

  return (
    <>
      <div className="scrollContainer">
        {notes.map((note, idx) => 
          <div key={idx}>
            <>
            {user?.profile === note.owner._id &&
              <>
                <div className='noteWithBtns'>
                  {note.content}
                    <div>
                      <button className='edit'><Link className='edit'to='/edit' state={{note}}><FontAwesomeIcon icon={faPencil}/></Link></button>
                      <button className='delete' onClick={() => handleDeleteNote(note._id)}><FontAwesomeIcon icon={faTrashCan}/></button>
                    </div>
                </div>
              </>
            }
            </>
          </div>
        )}
      </div>
        <AddNote handleAddNote={handleAddNote} notes={notes} setNotes={setNotes} user={user} />
    </>
  )
}

export default NoteShow;