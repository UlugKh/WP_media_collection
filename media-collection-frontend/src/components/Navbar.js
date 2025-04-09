import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav style={{ padding: "1rem", background: "#f3f3f3" }}>
      <Link to="/">Home</Link> |
      <Link to="/add"> Add Media</Link>
    </nav>
  );
};

export default Navbar;
