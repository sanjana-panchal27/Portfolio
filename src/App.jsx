import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './components/About/About';
import Navbar from './components/Navbar';
import Home from './components/Home/Home';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="" element={<Home />} />
          <Route path="" element={<About />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
