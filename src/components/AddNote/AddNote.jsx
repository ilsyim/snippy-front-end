import { useState, useRef, useEffect } from 'react';
import * as noteService from '../../services/noteService'


const AddNote = ({handleAddNote, setNotes, notes, user,}) => {
  const formElement = useRef()
  const [noteData, setNoteData] = useState({
    unit:"",
    content:""
  })

  const handleChange = evt => {
    setNoteData({...noteData, [evt.target.name]: evt.target.value})
  }

  const handleSubmit = async evt => {
    evt.preventDefault()
    try{
      handleAddNote(noteData)
      setNoteData({unit:[0], content:""})
    } catch (err) {
      console.log(err)
    }
  }

  const {unit, content} = noteData
  const isFormInvalid = () => {
    return !(unit && content)
  }

  return (
    <>
      <h2 className='takeNotes'>Take Notes While Reviewing the Video:</h2>
        <form onSubmit={handleSubmit} autoComplete="off" ref={formElement}>
          <div className='noteForm'>
            <select className='selectDropdown' name="unit" onChange={handleChange} value={noteData.unit} >
              <option>Select Unit</option>
              <option name="unit" value={noteData.unit[""]}>1</option>
              <option name="unit" value={noteData.unit[""]}>2</option>
              <option name="unit" value={noteData.unit[""]}>3</option>
              <option name="unit" value={noteData.unit[""]}>4</option>
            </select>
            <textarea className="textArea" value={noteData.content} name="content" onChange={handleChange} id="" cols="120" rows="10" placeholder="Insert Notes Here..."></textarea>
            <button disabled={isFormInvalid()} type="submit">Add</button>
          </div>
        </form>
    </>
  );
}

export default AddNote;