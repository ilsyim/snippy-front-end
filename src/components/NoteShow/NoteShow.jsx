import EditNote from '../../components/EditNote/EditNote'
import AddNote from '../AddNote/AddNote';

const NoteShow = ({handleAddNote, notes}) => {
  return (
    <>
      {notes.length?
      <>
        <h2>Note Details</h2>
        <button>Edit</button>
        <button>Delete</button>
        <p>{notes.content}</p>
      </>
      :
        <AddNote handleAddNote={handleAddNote} state={{notes}}/>
      }
      
    </>
  );
}

export default NoteShow;