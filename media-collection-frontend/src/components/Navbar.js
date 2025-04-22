import { Link } from 'react-router-dom';

const Navbar = ({ currentUser, onLogout }) => {
  return (
    <nav className="navbar" style={{ padding: '1rem', background: '#f3f3f3' }}>
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div className="container-right">
          <Link to="/">
            <button className="Register Home">Home</button>
          </Link>
        </div>

        <div className="container-left" style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
          <Link to="/About" className="AddMediaBtn">About us</Link>
          <Link to="/add" className="AddMediaBtn">Add Media</Link>

          {currentUser ? (
            <>
              <span style={{ fontWeight: 'bold' }}>Logged in as: {currentUser.username}</span>
              <button className="Register Logout" onClick={onLogout}>Logout</button>
            </>
          ) : (
            <>
              <Link to="">
                <button className="Register Login">Login</button>
              </Link>
              <Link to="">
                <button className="Register Signup">Sign Up</button>
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
