import { useState, useEffect } from 'react'
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
import styles from '../src/App.css'


const App = () => {
  const [user, setUser] = useState(authService.getUser())
  const [notes, setNotes] = useState([])
  const navigate = useNavigate()

  const playlist = ['765bXCLrr6c', 'HjJYiGe2HCg', 'OuCjW4WpZG0', 'AfPJXXZRSBs', 'ot6tkNoW6z0', 'n-oR6WAiYb4', '9-kZ041-a0Y', 'YVRTh_GgaF8', 'jcBv6Ntykhs', '9WGkZ6d9lV8', 'iO4iqMYkH7M', 'zRoptGjyBLM', 'nhKvHO6Sdv4', 'g0-ZoLSFEcA', 'TK987eiD_J8', 'FqJpeAahqLI', 'ssOIL1D_OMA', 'fEFQMOApShY', 'JbDJrXceA2U', 'iU-OdUkLc-Q', 'w5RljnfRe0', 'IecTfGl2GYk', 'Fc9ocRX-rr0', 'ckVbHwbdOSA', 'AXv2bTgrKpU', '7Qww2vkWJV0', 'j4k0eliBrHU', '7Kmh91WnZOU', '6fySbyYvcA0', '0f5bRUexDYg', '-K0Xq6Qn5U', 'eznHHeuKlUk', 'xbbahQ0eYVA', 'lTpyBLbFvHU', 'SrGobi26ppk', 'wRvGdUYwRVM', '3UpcdTCAosE', 'oIZ8zZKPehM', 'LuW7IN8x4ko', '4PIB0KOX13M', 'lZV0-WS-hqw', 'W8vzyFFia6Q', 'p4JgXdgVCjI', 'Io1PpcHlYoE', 'MToBVgxuffE', '-QDJjy3-c2Q', 'cYIQKyHc1i0', 'xTNhf6q4-es', 'RU9RIng4lZ4', 'MbiNF_1gb3E', 'xa7g1WokdzI', 'wWCRx2L9J2E', 'zPgo3OhCsKo', '4KL0mI2-_q8', 'AfC97ramPV4', 'XzJCYMMiHvs', 'xL1mRa1KthU', 'Sk6ogf7rgbc', '-Ml7vYWfE2c', 'FQLd8wx3VX0', 'm0q3VNyWHz4', 'sUAhJmg0Xgc', 'JGaZsifHeZ0', 'LkWX9giNrlk', 'Kh-Qr-UsTw8', 'nUrYdYymshk', '-oFm5u3YGmE', '9cWGVRLIoU0', 'OgWlyaPg33c', 'NpwNjNe-3jo', '07hjR-ZyT1I', '0Fr3XVbGpKE', 'm1PjaKNThGI', '4UETz03sZsI', 'Vm4mPttFXkU', 'mYsOg4BMiuI', 'KG31eiTFXnI', 'yU_TIK8JSyU', 'M6xvEUh4-mo', 'bftQxIdDqZM', '8KN644vTfL4', 'ZvkYElHpAbE', 'calnWpmxP70', 'Qiki1DMaFxs', 'qfeAJ2Llnss', 'GXqF10bUFLw', 'xRnt9Q3fZxk', 'VJf_UA_GSHk', 'm_bNr3CLoiA', '6YEP2tnI-UA', '_hE2QZvgjFg', 't9ibheWtpTk', 'g-Lw0E9LWb8', 'mMQmXcNlze8', 'NU-YeWnHFgA', '6GgIBddaWYA', 'c2JGo9Ir0cQ', 'GyM8hPJqG9c', 'BpQ0S1Y8COA', 'JVDrS2Fh4_w']

  useEffect(()=>{
    const fetchNote = async() => {
      const noteData = await noteService.show()
      setNotes(noteData)
    }
    fetchNote()
  },[])

  const handleLogout = () => {
    authService.logout()
    setUser(null)
    navigate('/')
  }

  const handleSignupOrLogin = () => {
    setUser(authService.getUser())
  }

  const handleDeleteNote = async noteId => {

    console.log(noteId)
    const deletedNote = await noteService.deleteNote(noteId)
    const newNotesArray = notes.filter(note => note._id !== deletedNote._id)
    setNotes(newNotesArray)
  }

  const handleUpdateNote = async (noteData) => {
    const updatedNote = await noteService.updateNote(noteData)
    const newNotesArray = notes.map(note => note._id === updatedNote._id ? updatedNote : note)
    setNotes(newNotesArray)
    navigate('/videoShow')
  }


  return (
    <>
      <NavBar user={user} handleLogout={handleLogout} />
      <Routes>
        <Route path="/" element={<VideoList user={user} playlist={playlist}/>} />
        <Route path="/videoShow" element={<VideoShow  user={user} notes={notes} setNotes={setNotes} handleDeleteNote={handleDeleteNote} playlist={playlist}/>} />
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
