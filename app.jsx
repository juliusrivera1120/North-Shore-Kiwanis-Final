import React from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar.jsx";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Programs from "./pages/Programs.jsx";
import Contact from "./pages/Contact.jsx";

function App() {
  return (
    <div className="app">
      <header className="site-header">
        <NavBar />
      </header>

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/programs" element={<Programs />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

      <footer className="site-footer">
        <p>&copy; 2025 North Shore Kiwanis</p>
      </footer>
    </div>
  );
}

export default App;
