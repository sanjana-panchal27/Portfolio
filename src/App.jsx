import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './components/About/About';
import Navbar from './components/Navbar';
import Home from './components/Home/Home';
import Footer from './components/Footer';
import Project from './components/Projects/Projects';
import Projects from './components/Projects/Projects';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          {/* <Route path="/skill" element={<Skills />} /> */}
        </Routes>

        <Project />
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
