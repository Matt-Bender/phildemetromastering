import Hero from '../components/Home/Hero'
import WhyUs from '../components/Projects/Discography'
import About from '../components/Home/About'
import ContactForm from '../components/Home/ContactForm'
import Footer from '../components/Home/Footer'
import DarkSpace from '../components/DarkSpace';
import Discography from '../components/Projects/Discography';
import Fade from 'react-reveal/Fade';


const HomeView = () => {
    return (
      <div className="bg-light">
      {/* <Hero/> */}
      <DarkSpace/>
        <Fade bottom duration={2000}>
      <Discography/>
      </Fade>
      </div>
      
    )
  }

  export default HomeView;