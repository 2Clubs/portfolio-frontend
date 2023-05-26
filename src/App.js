import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import { Routes, Route } from "react-router-dom"
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';

function App() {
  const URL = "https://portfolio-backend-evos.onrender.com/"
  
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route
          exact path='/'
          element={<Home />}
        />
        <Route
          path='/projects'
          element={<Projects/>}
        />
        <Route
          path='/about'
          element={<About/>}
        />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
