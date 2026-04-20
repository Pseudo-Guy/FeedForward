import React from 'react';
import { Routes, Route } from 'react-router-dom';

// Import components (we will create these next)
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Import pages
import Home from './pages/Home';
import Donate from './pages/Donate';
import FindFood from './pages/FindFood';
import About from './pages/About';

function App() {
  return (
    <div className="app-container">
      {/* Navbar will render on all pages */}
      <Navbar />
      
      {/* Main content area */}
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/donate" element={<Donate />} />
          <Route path="/find" element={<FindFood />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>

      {/* Footer will render on all pages */}
      <Footer />
    </div>
  );
}

export default App;
