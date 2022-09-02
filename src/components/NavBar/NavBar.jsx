import { Link } from 'react-router-dom'
<style>
@import url('https://fonts.googleapis.com/css2?family=Titan+One&display=swap');
</style>

const NavBar = ({ user, handleLogout }) => {
  return (
    <>
      <nav className="navbar bg-light fixed-top" >
        <div className="container-fluid">
          <img id="ostrich" className="navbar-brand" style={{width: 40}} src="./ostrich-svgrepo-com.svg" alt="SNIPPY logo" />
          <a className="navbar-brand" href="/">SNIPPY</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
            <div className="offcanvas-header">
              <h5 className="offcanvas-title" id="offcanvasNavbarLabel">...like Clippy but better.</h5>
              <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div className="offcanvas-body">
      {user ?

              <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                <li className="nav-item">
                  <a className="nav-link active" id="homeLink" aria-current="page" href="/">Home</a>
                </li>
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Resources
                  </a>
                  <ul className="dropdown-menu">
                    <li data-bs-dismiss="offcanvas"><a href="https://www.github.com" target="_blank" rel="noopener noreferrer" className="dropdown-item">GitHub</a></li>
                    <li>
                      <hr className="dropdown-divider"/>
                    </li>
                    <li data-bs-dismiss="offcanvas"><a href="https://ga-clippy.com" target="_blank" rel="noopener noreferrer" className="dropdown-item">Clippy</a></li>
                    <li>
                      <hr className="dropdown-divider"/>
                    </li>
                    <li data-bs-dismiss="offcanvas"><a href="https://developer.mozilla.org/" target="_blank" rel="noopener noreferrer" className="dropdown-item">MDN</a></li>
                  </ul>
                </li>
                <div className='bottomNav'>
                  <li className="nav-item" data-bs-dismiss="offcanvas">
                  <Link to="/changePassword" className="nav-link">Change Password</Link>
                  </li>
                  <li className="nav-item" data-bs-dismiss="offcanvas">
                  <Link to="" onClick={handleLogout} className="nav-link">Log Out</Link>
                  </li>
                </div>
              </ul>
                :
                <nav className="navbar" >
                  <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                    <li className="nav-item" data-bs-dismiss="offcanvas">
                      <Link to="/login" className="nav-link" >Log In</Link>
                    </li>
                    <li className="nav-item" data-bs-dismiss="offcanvas">
                      <Link to="/signup" className="nav-link">Sign Up</Link>
                    </li>
                  </ul>
                </nav>
      }
              </div>
          </div>
        </div>
      </nav>
  </>
  )
}

export default NavBar

