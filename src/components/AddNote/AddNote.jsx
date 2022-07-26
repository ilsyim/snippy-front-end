import { useState } from 'react';
import * as noteService from '../../services/noteService'

const AddNote = (props) => {
  const [noteData, setNoteData] = useState({
    unit:"",
    content:""
  })

  const handleNoteChange = evt => {
    setNoteData({...noteData, [evt.target.name]: evt.target.value})
  }

  const handleNoteSubmit = async evt => {
    evt.preventDefault()
    const res = await noteService.addNote(noteData)
    console.log(res)
    props.setNotes([...props.notes, noteData])
    setNoteData({unit:"", content:""})

  }

  return (
    <>
      <h2>Take Notes While Reviewing the Video</h2>
      <form onSubmit={handleNoteSubmit} autoComplete="off">
        <select name="unit" onChange={handleNoteChange} >
          <option>Select Unit</option>
          <option name="unit" value={noteData.unit[""]}>Unit 1</option>
          <option name="unit" value={noteData.unit[""]}>Unit 2</option>
          <option name="unit" value={noteData.unit[""]}>Unit 3</option>
          <option name="unit" value={noteData.unit[""]}>Unit 4</option>
        </select>
        <textarea type="text" value={noteData.content} name="content" onChange={handleNoteChange} id="" cols="30" rows="10" placeholder="Insert Notes Here..."></textarea>
        <button type="submit">Add</button>
      </form>
      {}
    </>
  );
}

export default AddNote;