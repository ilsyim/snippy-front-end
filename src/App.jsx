import { useState  } from 'react'
import { Routes, Route, useNavigate, Navigate } from 'react-router-dom'
import NavBar from './components/NavBar/NavBar'
import Signup from './pages/Signup/Signup'
import Login from './pages/Login/Login'
import Profiles from './pages/Profiles/Profiles'
import VideoList from './pages/VideoList/VideoList'
import VideoShow from './pages/VideoShow/VideoShow'
import ChangePassword from './pages/ChangePassword/ChangePassword'
import * as authService from './services/authService'
import * as noteService from './services/noteService'
import EditNote from './components/EditNote/EditNote'
import '../src/App.css'


const App = () => {
  const [user, setUser] = useState(authService.getUser())
  const [notes, setNotes] = useState([])
  const navigate = useNavigate()




  const handleLogout = () => {
    authService.logout()
    setUser(null)
    navigate('/')
  }

  const handleSignupOrLogin = () => {
    setUser(authService.getUser())
  }

  const handleDeleteNote = async noteId => {
    const deletedNote = await noteService.deleteNote(noteId)
    const newNotesArray = notes.filter(note => note._id !== deletedNote._id)
    setNotes(newNotesArray)
  }

  const handleUpdateNote = async (noteData, videoId) => {
    const updatedNote = await noteService.updateNote(noteData, videoId)
    const newNotesArray = notes.map(note => note._id === updatedNote._id ? updatedNote : note)
    setNotes(newNotesArray)
    navigate('/videoShow', {state: {noteData: noteData, videoId: videoId}})
  }


  return (
    <>
      <NavBar user={user} handleLogout={handleLogout} />
      <Routes>
        <Route path="/" element={<VideoList user={user} />} />
        <Route path="/videoShow" element={<VideoShow  user={user} notes={notes} setNotes={setNotes} handleDeleteNote={handleDeleteNote} />} />
        <Route
          path="/edit"
          element={<EditNote handleUpdateNote={handleUpdateNote}/>}
        />
        <Route
          path="/signup"
          element={<Signup handleSignupOrLogin={handleSignupOrLogin} />}
        />
        <Route
          path="/login"
          element={<Login handleSignupOrLogin={handleSignupOrLogin} />}
        />
        <Route
          path="/profiles"
          element={user ? <Profiles /> : <Navigate to="/login" />}
        />
        <Route
          path="/changePassword"
          element={
            user ? (
              <ChangePassword handleSignupOrLogin={handleSignupOrLogin} />
            ) : (
              <Navigate to="/login" />
            )
          }
        />
      </Routes>
    </>
  )
}

export default App
