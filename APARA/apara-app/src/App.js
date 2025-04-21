// App.js

import React from 'react';
import Login from './components/Login';
import Productos from './components/Productos';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; //Navegacion entre paginas


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/productos" element={<Productos />} />
      </Routes>
    </Router>
  );
}
export default App;
