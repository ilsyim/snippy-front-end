import { Link } from 'react-router-dom'

const NavBar = ({ user, handleLogout }) => {
  return (
    <>
      {user ?
        <nav>
          <ul>
            <li>{user.name}</li>
            searchbar
            <li><Link to="" onClick={handleLogout}>LOG OUT</Link></li>
            <li><Link to="/changePassword">Change Password</Link></li>
            <br/>
            <li><Link to="/allVideos">All Videos</Link></li>
            <li>
              <a href="https://www.github.com" target="_blank" rel="noopener noreferrer">GitHub</a>
            </li>
            <li>
              <a href="https://ga-clippy.com" target="_blank" rel="noopener noreferrer">Clippy</a>
            </li>
            <li>
              <a href="https://developer.mozilla.org/" target="_blank" rel="noopener noreferrer">MDN</a>
            </li>
          </ul>
        </nav>
      :
        <nav>
          <ul>
            <li><Link to="/login">Log In</Link></li>
            <li><Link to="/signup">Sign Up</Link></li>
          </ul>
        </nav>
      }
    </>
  )
}

export default NavBar
