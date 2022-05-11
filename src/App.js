
import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Pages/About/About';
import Home from './Pages/Home/Home';
import Footer from './Pages/Shared/Footer';
import NavBar from './Pages/Shared/NavBar/NavBar';

function App() {
  return (
    <div >
      <NavBar></NavBar>
      <Routes>
        <Route path='/' element={<Home></Home>}>  </Route>
        <Route path='about' element={<About></About>}>  </Route>

      </Routes>
      <Footer />
    </div>
  );
}

export default App;
