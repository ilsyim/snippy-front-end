import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';



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
      navigate('/videoShow', {state: {video: noteData}})
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
    <div className='editNote'>
      <h2 className='editH2'>Update your notes:</h2>
      <form onSubmit={handleSubmit} autoComplete="off">
      <div className='editForm'>
        <select className='selectDropdown' name="unit" onChange={handleChange} >
          <option>Select Unit</option>
          <option name="unit" value={noteData.unit[""]}>1</option>
          <option name="unit" value={noteData.unit[""]}>2</option>
          <option name="unit" value={noteData.unit[""]}>3</option>
          <option name="unit" value={noteData.unit[""]}>4</option>
        </select>
        <textarea className="textArea" value={noteData.content} name="content" onChange={handleChange} id="" cols="100" rows="10" placeholder="Insert Notes Here..."></textarea>
        <button disabled={isFormInvalid()} type="submit">Edit</button>
      </div>
      </form>
    </div>
      {}
    </>
  );
}

export default EditNote;