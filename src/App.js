
import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Pages/About/About';
import Appointment from './Pages/Appointment/Appointment';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import RequireAuth from './Pages/Login/RequireAuth';
import SignUp from './Pages/Login/SignUp';
import Footer from './Pages/Shared/Footer';
import NavBar from './Pages/Shared/NavBar/NavBar';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div >
      <NavBar></NavBar>
      <Routes>
        <Route path='/' element={<Home></Home>}>  </Route>
        <Route path='/about' element={<About></About>}>  </Route>
        <Route path='/appointment' element={<RequireAuth>
          <Appointment></Appointment>
        </RequireAuth>}>  </Route>
        <Route path='/login' element={<Login></Login>}>  </Route>
        <Route path='/signup' element={<SignUp></SignUp>}>  </Route>


      </Routes>
      <Footer />
      <ToastContainer />
    </div>
  );
}

export default App;
