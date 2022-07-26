import { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';


const EditNote = (props) => {
  const navigate = useNavigate()
  const location = useLocation()
  const [noteData, setNoteData] = useState(location.state.note)

  const handleChange = evt => {
    setNoteData({...noteData, [evt.target.name]: evt.target.value})
  }

  const handleSubmit = async evt => {
    evt.preventDefault()
    try{
      props.handleUpdateNote(noteData)
      navigate('/videoShow')
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
      <h2>Update your notes</h2>
      <form onSubmit={handleSubmit} autoComplete="off">
        <select name="unit" onChange={handleChange} >
          <option>Select Unit</option>
          <option name="unit" value={noteData.unit[""]}>1</option>
          <option name="unit" value={noteData.unit[""]}>2</option>
          <option name="unit" value={noteData.unit[""]}>3</option>
          <option name="unit" value={noteData.unit[""]}>4</option>
        </select>
        <textarea value={noteData.content} name="content" onChange={handleChange} id="" cols="30" rows="10" placeholder="Insert Notes Here..."></textarea>
        <button disabled={isFormInvalid()} type="submit">Edit</button>
      </form>
      {}
    </>
  );
}

export default EditNote;