import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar" style={{ padding: "1rem", background: "#f3f3f3" }}>
    <div className="container">
      <div className="container-right">
        <Link to="/"><button className="Register Home">Home</button></Link>
        </div>
        <div className="container-left">
          <Link to="/about" className="AddMediaBtn">About us</Link>
          <Link to="/add" className="AddMediaBtn"> Add Media</Link>
          <Link to="">
            <button className="Register Login">Login</button>
          </Link>
          <Link to="">
            <button className="Register Signup">SingUp</button>
          </Link>
        </div>
    </div>
    </nav>
);
};

export default Navbar;
