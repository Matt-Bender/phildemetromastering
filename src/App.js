import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import ContactForm from './components/Home/ContactForm'
import Navbar from './components/Navbar';
import Footer from './components/Home/Footer';
import ContactView from './pages/ContactView';
import HomeView from './pages/HomeView';
import { Routes, Route } from 'react-router-dom';
import AboutView from './pages/AboutView';
import './css/app.css';
import DarkSpace from './components/DarkSpace';
import EquipmentView from './pages/EquipmentView';





function App() {
  

  return (
    <div>
      <Navbar/>

      <Routes>
        <Route path="/contact" element={<ContactView />}/>
        <Route path="/equipment" element={<EquipmentView />}/>

        <Route path="/about" element={<AboutView />} />
        <Route exact path="/" element={<HomeView />}/>

      </Routes>
      <DarkSpace />
      <ContactForm/>
      <Footer/>
      {/* <TestComponent /> */}
      {/* <Stylesheet /> */}
      
      
    </div>
  );
}

export default App;

