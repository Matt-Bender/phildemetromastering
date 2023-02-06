import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import ContactForm from './components/Home/ContactForm'
import Navbar from './components/Navbar';
import Footer from './components/Home/Footer';
import ContactView from './pages/ContactView';
import HomeView from './pages/HomeView';
import { Routes, Route } from 'react-router-dom';
import BlankSpace from './components/BlankSpace';
import AboutView from './pages/AboutView';
import Fade from 'react-reveal/Fade';
import TestComponent from './components/TestComponent';
import Stylesheet from './components/Stylesheet';
import './css/app.css';
import DarkSpace from './components/DarkSpace';
import DeliveryView from './pages/DeliveryView';





function App() {
  

  return (
    <div>
      <Navbar/>

      <Routes>
        <Route exact path="/" element={<HomeView />}/>
        <Route path="/contact" element={<ContactView />}/>
        <Route path="/delivery" element={<DeliveryView />}/>

        <Route path="/about" element={<AboutView />} />

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

