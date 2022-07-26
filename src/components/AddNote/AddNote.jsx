import { useState, useRef, useEffect } from 'react';
import * as noteService from '../../services/noteService'
import { useLocation } from 'react-router-dom';

const AddNote = (props) => {
  const formElement = useRef()
  const [noteData, setNoteData] = useState({
    unit:"",
    content:""
  })
  const [notes, setNotes] = useState([])

  const location = useLocation()

  // useEffect(() => {
  //   const fetchNote = async () => {
  //     const noteData = await show(location.state.note._id)
  //     props.setNote(noteData)
  //   }
  //   fetchNote()
  // }, [location.state.note._id])

  const handleAddNote = async (noteData) => {
    const newNote = await noteService.addNote(noteData)
    setNotes([...notes, newNote])
  }

  const handleNoteChange = evt => {
    setNoteData({...noteData, [evt.target.name]: evt.target.value})
  }

  const handleSubmit = async evt => {
    evt.preventDefault()
    handleAddNote(noteData)
    setNotes([...notes, noteData])
    setNoteData({unit:"", content:""})
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