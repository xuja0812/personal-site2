import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Footer from './components/Footer'; 
import Blog from './pages/Blog';
import './fontawesome';

function App() {
  return (
    <Router>
      {/* <ParticlesBackground /> */}
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
      <Footer /> 
    </Router>
  );
}

export default App;
