import About from './components/About/About';


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
