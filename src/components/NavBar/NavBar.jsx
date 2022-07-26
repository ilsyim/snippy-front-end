import { Link } from 'react-router-dom'
import styles from './NavBar.module.css'

const NavBar = ({ user, handleLogout }) => {
  return (
    <>
      {user ?
        <nav >
          {user.name}
          searchbar
            <Link to="" onClick={handleLogout} className={styles.navSpacing}>LOG OUT</Link>
            <Link to="/changePassword" className={styles.navSpacing}>Change Password</Link>
            <br/>
            <Link to="/allVideos" className={styles.navSpacing}>All Videos</Link>
            
              <a href="https://www.github.com" target="_blank" rel="noopener noreferrer" className={styles.navSpacing}>GitHub</a>
            
            
              <a href="https://ga-clippy.com" target="_blank" rel="noopener noreferrer" className={styles.navSpacing}>Clippy</a>
            
            
              <a href="https://developer.mozilla.org/" target="_blank" rel="noopener noreferrer" className={styles.navSpacing}>MDN</a>
        </nav>
      :
        <nav>
          <ul>
            <Link to="/login">Log In</Link>
            <Link to="/signup">Sign Up</Link>
          </ul>
        </nav>
      }
    </>
  )
}

export default NavBar
