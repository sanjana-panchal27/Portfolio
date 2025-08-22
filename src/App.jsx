import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './components/About/About';
import Navbar from './components/Navbar';
import Home from './components/Home/Home';
import Footer from './components/Footer';
import Projects from './components/Projects/Projects';
import Resume from './components/Resume/ResumeNew';
import Services from './components/Services/services';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/services" element={<Services />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
