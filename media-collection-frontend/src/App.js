import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AddMediaPage from './pages/AddMediaPage';
import EditMediaPage from './pages/EditMediaPage';
import NotFound from './pages/NotFound';
import AboutPage from "./pages/AboutPage";
import Navbar from './components/Navbar';
import MediaDetailPage from './pages/MediaDetailPage';
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/add" element={<AddMediaPage />} />
        <Route path="/edit/:id" element={<EditMediaPage />} />
          <Route path="/about" element={<AboutPage/>} />
        <Route path="*" element={<NotFound />} />
        <Route path="/media/:type/:id" element={<MediaDetailPage />} />
      </Routes>
    </>
  );
}

export default App;
