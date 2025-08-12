import About from './components/About/About';
import Github from './components/About/Github';
import Techstack from './components/About/Techstack';
import Toolstack from './components/About/Toolstack';
import Contact from './components/Home/Contact';
import Home from './components/Home/Home';
import Type from './components/Home/Type';
import Projects from './components/Projects/Projects';
import Resume from './components/Resume/Resume';

function App() {
  return (
    <>
      <div className="about-page">
        <About />
        <Github />
        <Techstack />
        <Toolstack />
      </div>

      <div className="home">
        <Contact />
        <Home />
        <Type />
      </div>

      <Projects />
      <Resume />
    </>
  );
}

export default App;
