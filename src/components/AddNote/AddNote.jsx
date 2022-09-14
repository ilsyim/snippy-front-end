import { useState, useRef } from 'react';


const AddNote = ({handleAddNote, setNotes, notes, user, videoId}) => {
  const formElement = useRef()
  const [noteData, setNoteData] = useState({
    unit: "",
    content: "",
    videoId: `${videoId}`
  })

  const handleChange = evt => {
    setNoteData({...noteData, [evt.target.name]: evt.target.value})
  }

  const handleSubmit = async evt => {
    evt.preventDefault()
    try{
      handleAddNote(noteData, videoId)
      setNoteData({unit:[0], content:""})
    } catch (err) {
      console.log(err)
    }
  }

  const {unit, content} = noteData
  const isFormInvalid = () => {
    return !(content)
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
            <textarea hidden value={`${videoId}`} name="videoId" onChange={handleChange} cols="30" rows="10"></textarea>
            <button className='addBtn' disabled={isFormInvalid()} type="submit">Add</button>
          </div>
        </form>
    </>
  );
}

export default AddNote;