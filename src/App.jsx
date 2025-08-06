import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Forecast from './pages/Forecast';
import Settings from './pages/Settings';
import { ThemeProvider } from './context/ThemeContext';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/forecast" element={<Forecast />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;