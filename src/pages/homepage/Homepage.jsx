
import Hero from '../../components/hero/Hero';
import OurProcess from '../../components/ourprocess/OurProcess';
import Navbar from '../../components/navbar/Navbar';
import Whatweoffer from '../../components/whatweoffer/Whatweoffer';
import Whychooseus from '../../components/whychooseus/Whychooseus';
import ContactForm from '../../components/contactform/ContactForm';
// import Testimonial from '../../components/testimonial/Testimonial';
import Footer from '../../components/footer/Footer';

const Homepage = () => {
  return (
    <>
    <Navbar/>
    <Hero/>
    <OurProcess/>
    <Whatweoffer/>
    <Whychooseus/>
    <ContactForm/>
    {/* <Testimonial/> */}
    <Footer/>

    
    </>
  )
}

export default Homepage
