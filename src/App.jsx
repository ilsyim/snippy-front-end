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

  const playlist = [
    {videoId:'765bXCLrr6c', title: 'Pre-Course Orientation'}, {videoId: 'HjJYiGe2HCg', title: 'Day 1 Orientation & Introductions'}, {videoId: 'OuCjW4WpZG0', title: 'Dev Environment Lab Walkthrough'}, {videoId: 'AfPJXXZRSBs', title: 'Intro to Notion'}, {videoId: 'ot6tkNoW6z0', title: 'Intro to the Terminal'}, {videoId: 'n-oR6WAiYb4', title: 'Intro to Git and GitHub Workflow'}, {videoId: '9-kZ041-a0Y', title: 'Completing the Dev Environment Lab'}, {videoId: 'YVRTh_GgaF8', title: 'Intro to JavaScript'}, {videoId: 'jcBv6Ntykhs', title: 'JS Data Types'}, {videoId: '9WGkZ6d9lV8', title: 'How to Clippy'}, {videoId: 'iO4iqMYkH7M', title: 'JS Control Flow (Part 1)'}, {videoId: 'zRoptGjyBLM', title: 'JS Control Flow (Part 2)'}, {videoId: 'nhKvHO6Sdv4', title: 'JS Arrays'}, {videoId: 'g0-ZoLSFEcA', title: 'JS Functions'}, {videoId: 'TK987eiD_J8', title: 'JS Scope'}, {videoId: 'ssOIL1D_OMA', title: 'Engineering Channel Posting Guidelines'}, {videoId: 'fEFQMOApShY', title: 'How To Clippy - The Sequel'}, {videoId: 'JbDJrXceA2U', title: 'JS Objects'}, {videoId: 'iU-OdUkLc-Q', title: 'JS Classes'}, {videoId: 'w5R_ljnfRe0', title: 'Daily Code Challenges'}, {videoId: 'IecTfGl2GYk', title: 'Alumni Q&A Panel'}, {videoId: 'Fc9ocRX-rr0', title: 'Array Iterator Methods Part 1'}, {videoId: 'ckVbHwbdOSA', title: 'Array Iterator Methods Part 2'}, {videoId: 'AXv2bTgrKpU', title: 'Intro to the DOM'}, {videoId: '7Qww2vkWJV0', title: 'Intro to the DOM (Part 2)'}, {videoId: 'j4k0eliBrHU', title: 'DOM Events'}, {videoId: '7Kmh91WnZOU', title: 'Guess the Number in the Browser'}, {videoId: '6fySbyYvcA0', title: 'Tic Tac Toe Lab Intro'}, {videoId: '0f5bRUexDYg', title: 'Intro to CSS'}, {videoId: 'eznHHeuKlUk', title: 'CSS Grid'}, {videoId: 'xbbahQ0eYVA', title: 'Responsive Design'}, {videoId: 'lTpyBLbFvHU', title: 'Unit 1 Project Intro'}, {videoId: 'SrGobi26ppk', title: 'Wireframing'}, {videoId: 'wRvGdUYwRVM', title: 'Static Page Deployment'}, {videoId: '3UpcdTCAosE', title: 'Bootstrap and Data Calls'}, {videoId: 'oIZ8zZKPehM', title: 'Optional - Dynamic Favicons'}, {videoId: 'LuW7IN8x4ko', title: 'Optional - Google Fonts'}, {videoId: '4PIB0KOX13M', title: 'Optional - Responsive Design'}, {videoId: 'lZV0-WS-hqw', title: 'Playing Audio in the Browser'}, {videoId: 'W8vzyFFia6Q', title: 'Light and Dark Mode (Ye/Tay)'}, {videoId: 'p4JgXdgVCjI', title: 'External JS File Data Example'}, {videoId: 'Io1PpcHlYoE', title: 'Unit 1 Assessment Prep'}, {videoId: 'MToBVgxuffE', title: 'Unit 1 Presentations - Part 1'}, {videoId: '-QDJjy3-c2Q', title: 'Unit 1 Presentations, part 2'}, {videoId: 'cYIQKyHc1i0', title: 'Unit 2 Intro'}, {videoId: 'xTNhf6q4-es', title: 'What We Build'}, {videoId: 'RU9RIng4lZ4', title: 'Intro to MVC Architecture'}, {videoId: 'MbiNF_1gb3E', title: 'Intr0o to Node'}, {videoId: 'xa7g1WokdzI', title: 'Promises'}, {videoId: 'wWCRx2L9J2E', title: 'Intro to Express'}, {videoId: 'zPgo3OhCsKo', title: 'Codewars'}, {videoId: '4KL0mI2-_q8', title: 'Lab Review - Intro to Express Lab'}, {videoId: 'AfC97ramPV4', title: 'Intro to MongoDB - part 1'}, {videoId: 'XzJCYMMiHvs', title: 'Intro to MongoDB - part 2'}, {videoId: 'xL1mRa1KthU', title: 'Sign Up for MongoDB Atlas'}, {videoId: 'Sk6ogf7rgbc', title: 'The MEN stack so far (todos using local data)'}, {videoId: '-Ml7vYWfE2c', title: 'Express Routers & Controllers'}, {videoId: 'FQLd8wx3VX0', title: 'Intro to Mongoose'}, {videoId: 'm0q3VNyWHz4', title: 'THE CHART & Route Parameters (Part 1)'}, {videoId: 'sUAhJmg0Xgc', title: 'THE CHART & Route Parameters (Part 2)'}, {videoId: 'JGaZsifHeZ0', title: 'Express Middleware'}, {videoId: 'LkWX9giNrlk', title: 'Express Todo Update Functionality'}, {videoId: 'Kh-Qr-UsTw8', title: 'David plays with an iPad'}, {videoId: 'nUrYdYymshk', title: 'Mongoose Movies (Part 1)'}, {videoId: '-oFm5u3YGmE', title: 'Mongoose Movies (Part 3)'}, {videoId: '9cWGVRLIoU0', title: 'Mongoose Embedding'}, {videoId: 'OgWlyaPg33c', title: 'Mongoose Referencing (Part 1)'}, {videoId: 'NpwNjNe-3jo', title: 'Mongoose Referencing (Part 2)'}, {videoId: '07hjR-ZyT1I', title: 'Google OAuth (Part 1)'}, {videoId: '0Fr3XVbGpKE', title: 'Unit 2 Project Preview'}, {videoId: 'm1PjaKNThGI', title: 'Google OAuth (Part 2)'}, {videoId: '4UETz03sZsI', title: 'MEN Stack Deployment'}, {videoId: 'Vm4mPttFXkU', title: 'Unit 2 Project Intro'}, {videoId: 'mYsOg4BMiuI', title: 'Taco Cat (Part 1)'}, {videoId: 'KG31eiTFXnI', title: 'Taco Cat (Part 2)'}, {videoId: 'yU_TIK8JSyU', title: 'Taco Cat (Part 3)'}, {videoId: 'M6xvEUh4-mo', title: 'Exposing an API'}, {videoId: 'bftQxIdDqZM', title: 'Consuming an API'}, {videoId: '8KN644vTfL4', title: 'Alex & Cory Presentations'}, {videoId: 'ZvkYElHpAbE', title: 'Taco Tracker'}, {videoId: 'calnWpmxP70', title: 'Unit 2 Presentations'}, {videoId: 'Qiki1DMaFxs', title: 'Intro to React and SPAs'}, {videoId: 'qfeAJ2Llnss', title: 'Intro to JSX'}, {videoId: 'GXqF10bUFLw', title: 'React Hooks and State'}, {videoId: 'xRnt9Q3fZxk', title: 'React DnD API (Part 1)'}, {videoId: 'VJf_UA_GSHk', title: 'React DnD API (Part 1b)'}, {videoId: 'm_bNr3CLoiA', title: 'React DnD API (Part 2)'}, {videoId: '6YEP2tnI-UA', title: 'React DnD API (Part 3)'}, {videoId: '_hE2QZvgjFg', title: 'React DnD API (Part 4)'}, {videoId: 't9ibheWtpTk', title: 'React DnD API (Part 5a)'}, {videoId: 'g-Lw0E9LWb8', title: 'React DnD API (Part 5b)'}, {videoId: 'mMQmXcNlze8', title: 'Unit 3 Project Intro'}, {videoId: 'NU-YeWnHFgA', title: 'JWT Auth (Part 1)'}, {videoId: '6GgIBddaWYA', title: 'JWT Auth (Part 2)'}, {videoId: 'c2JGo9Ir0cQ', title: 'React Puppies (Part 1)'}, {videoId: 'GyM8hPJqG9c', title: 'React Blog (Bonus Lecture)'}, {videoId: 'BpQ0S1Y8COA', title: 'Unit 3 Pitch Decks'}, {videoId: 'JVDrS2Fh4_w', title: 'React Puppies (Part 2)'},]


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
