import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';

import CreatePatient from './components/CreatePatient';
import Welcome from './components/Welcome';
import Navbar from './components/navbar';
import Home from './routes/Home';
import Contact from './routes/Contact';
import Service from './routes/Service';
import About from './routes/About';
import Login from './components/Login';
import SignUp from './routes/SignUp';

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/create-patient' element={<CreatePatient />} />
          <Route path='/newwelcome' element={<Navbar />} />
          <Route path='/product' element={<Welcome />} />
          <Route path='/about' element={<About />} />
          <Route path='/service' element={<Service />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<SignUp />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;