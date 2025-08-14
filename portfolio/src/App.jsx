import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './components/About/About';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="" element={<Navbar />} />
        </Routes>
      </BrowserRouter>
      <Navbar />
      <About />
    </>
  );
}

export default App;
