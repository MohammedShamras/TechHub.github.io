import './App.css';
import Navigation from './Components/Navigation/Navigation';
import {Routes, Route} from 'react-router-dom';
import Home from './Pages/Home';
import Register from './Pages/Register';
import Footer from './Components/Footer/Footer';






function App() {
  return (
    <div>
      <Navigation></Navigation>

      
      
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Home" element={<Home />} />
      <Route path="/Register" element={<Register />} />
    </Routes>

    <Footer></Footer>

      
      
    </div>
  );
}

export default App;
