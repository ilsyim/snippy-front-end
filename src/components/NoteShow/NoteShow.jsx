import EditNote from '../../components/EditNote/EditNote'
import AddNote from '../AddNote/AddNote';

const NoteShow = (props) => {
  return (
    <>
      {props.note.length?
      <>
        <h2>Note Details</h2>
        <button>Edit</button>
        <button>Delete</button>
        <p>{props.note.content}</p>
      </>
      :
        <AddNote />
      }
      
    </>
  );
}

export default NoteShow;