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
      <h2>Take Notes While Reviewing the Video</h2>
      <form onSubmit={handleSubmit} autoComplete="off" ref={formElement}>
        <select name="unit" onChange={handleChange} >
          <option>Select Unit</option>
          <option name="unit" value={noteData.unit[""]}>1</option>
          <option name="unit" value={noteData.unit[""]}>2</option>
          <option name="unit" value={noteData.unit[""]}>3</option>
          <option name="unit" value={noteData.unit[""]}>4</option>
        </select>
        <textarea value={noteData.content} name="content" onChange={handleChange} id="" cols="30" rows="10" placeholder="Insert Notes Here..."></textarea>
        <button disabled={isFormInvalid()} type="submit">Add</button>
      </form>
      {}
    </>
  );
}

export default AddNote;