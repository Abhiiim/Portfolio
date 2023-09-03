import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import Projects from './components/Projects/Projects';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes >
        <Route path='/' element={<Home />} />
        <Route path='/projects' element={<Projects />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
