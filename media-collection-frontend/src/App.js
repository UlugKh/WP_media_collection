import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {HomePageDesktop} from './HomePageDesktop';
import AddMediaPage from './pages/AddMediaPage';
import EditMediaPage from './pages/EditMediaPage';
import NotFound from './pages/NotFound';
import Navbar from './components/Navbar';
import {FooterSection} from './FooterSection';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePageDesktop />} />
        <Route path="/add" element={<AddMediaPage />} />
        <Route path="/edit/:id" element={<EditMediaPage />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/" element={<FooterSection />} />
      </Routes>
    </>
  );
}

export default App;
