import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './components/About/About';
import Navbar from './components/Navbar';
import Home from './components/Home/Home';
import Footer from './components/Footer';
import Projects from './components/Projects/Projects';
import Resume from './components/Resume/ResumeNew';
import Services from './components/Services/services';
import BlogPage from './components/Blog/Blog';
import Contact from './components/Contact';
import { PDFViewer } from '@react-pdf/renderer';
import ReactDOM from 'react-dom';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />

          <Route path="/services" element={<Services />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/contact" element={<Contact />} />
          <PDFViewer>
            <Route path="/resume" element={<Resume />} />
          </PDFViewer>
        </Routes>

        <Footer />
      </BrowserRouter>
    </>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));

export default App;
