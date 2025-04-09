import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AddMediaPage from './pages/AddMediaPage';
import EditMediaPage from './pages/EditMediaPage';
import NotFound from './pages/NotFound';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/add" element={<AddMediaPage />} />
        <Route path="/edit/:id" element={<EditMediaPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
