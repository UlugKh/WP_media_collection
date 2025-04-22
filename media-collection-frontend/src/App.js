import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AddMediaPage from './pages/AddMediaPage';
import EditMediaPage from './pages/EditMediaPage';
import NotFound from './pages/NotFound';
import Navbar from './components/Navbar';
import MediaDetailPage from './pages/MediaDetailPage';
import FooterSection from "./components/FooterSection";
import Login from './components/Login';

function App() {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const storedId = localStorage.getItem('loggedInUserId');
    const storedUsername = localStorage.getItem('loggedInUsername');
    if (storedId && storedUsername) {
      setCurrentUser({ id: storedId, username: storedUsername });
    }

    const handleStorage = () => {
      const updatedId = localStorage.getItem('loggedInUserId');
      const updatedUsername = localStorage.getItem('loggedInUsername');
      if (updatedId && updatedUsername) {
        setCurrentUser({ id: updatedId, username: updatedUsername });
      } else {
        setCurrentUser(null);
      }
    };

    window.addEventListener('storage', handleStorage);
    return () => window.removeEventListener('storage', handleStorage);
  }, []);

  const handleLogin = (user) => {
    localStorage.setItem('loggedInUserId', user.id);
    localStorage.setItem('loggedInUsername', user.username);
    setCurrentUser(user);
  };

  const handleLogout = () => {
    localStorage.removeItem('loggedInUserId');
    localStorage.removeItem('loggedInUsername');
    setCurrentUser(null);
  };

  return (
    <>
      <Navbar currentUser={currentUser} onLogout={handleLogout} />
      {!currentUser && <Login onLogin={handleLogin} />}
      <Routes>
        <Route path="/" element={<HomePage currentUser={currentUser} />} />
        <Route path="/add" element={<AddMediaPage />} />
        <Route path="/edit/:id" element={<EditMediaPage />} />
        <Route path="/media/:type/:id" element={<MediaDetailPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <FooterSection/>
    </>
  );
}

export default App;
