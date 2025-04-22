import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {HomePageDesktop} from './HomePageDesktop';
import AddMediaPage from './pages/AddMediaPage';
import EditMediaPage from './pages/EditMediaPage';
import NotFound from './pages/NotFound';

import {FooterSection} from './FooterSection';

function App() {
  return (
    <>

      <Routes>
        <Route path="/" element={<HomePageDesktop />} />
        <Route path="/add" element={<AddMediaPage />} />
        <Route path="/edit/:id" element={<EditMediaPage />} />
        <Route path="*" element={<NotFound />} />

      </Routes>
      <FooterSection/>
    </>
  );
}

export default App;
