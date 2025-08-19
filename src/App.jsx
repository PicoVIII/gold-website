import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Categories from './pages/categories.jsx';
import SkinsPage from './pages/skins_page.jsx';
import Sell from './pages/sell.jsx';
import Login from './pages/login-page.jsx'
import Register from './pages/register-page.jsx';
import NotFound from './pages/NotFound.jsx';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/categories" element={<Categories />} />
      <Route path="/skins" element={<SkinsPage />} />
      <Route path="/sell" element={<Sell />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register/>} />
      <Route path="*" element={<NotFound />} /> {/* Catch-all for undefined routes */}
    </Routes>
  );
}

export default App;
