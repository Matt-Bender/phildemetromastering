import Hero from '../components/Home/Hero'
import WhyUs from '../components/Projects/Discography'
import About from '../components/Home/About'
import ContactForm from '../components/Home/ContactForm'
import Footer from '../components/Home/Footer'
import DarkSpace from '../components/DarkSpace';
import Discography from '../components/Projects/Discography'


const HomeView = () => {
    return (
      <div>
      <Hero/>
      <DarkSpace/>
      <Discography/>
      </div>
      
    )
  }

  export default HomeView;