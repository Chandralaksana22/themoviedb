// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Updated import

import { AuthProvider } from './contexts/AuthContext';
import HomePage from './components/HomePage';
import MovieDetails from './components/MovieDetails';

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movie/:id" element={<MovieDetails />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default App;
