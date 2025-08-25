
// import Navbar from './components/navbar/Navbar';
import Homepage from './pages/homepage/Homepage.jsx';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './pages/about/About.jsx';
import Clients from './pages/clients/Clients.jsx';
import Services from './pages/services/Services.jsx';
// import Contact from './pages/contact/Contact.jsx';
import Careers from './pages/careers/Careers.jsx';
import Contact from './pages/contactus/Contact.jsx';
import Applynow from './pages/applynow/Applynow.jsx';
import WebDevelopment from './pages/webdevelopment/WebDevelopment.jsx';
// import Admin from './pages/admin/Admin.jsx';
import BlogPost from './pages/blogpost/BlogPost.jsx';
import Admin from './pages/admin/admin.jsx';
import FloatingButton from './components/FloatingButton/FloatingButton.jsx';
import MobileApp from './pages/mobileappdevelopment/MobileApp.jsx';
import CustomApplications from './pages/customapplications/CustomApplications.jsx';
import DigitalMarketing from './pages/digitalmarketing/DigitalMarketing.jsx';
import SaasApplications from './pages/saasapplications/SaasApplications.jsx';
import ApiDevelopment from './pages/apidevelopment/ApiDevelopment.jsx';
function App() {
  return (
    <>
    {/* <Navbar/> */}
    {/* <Homepage/>  */}
    <Router>
      <Routes>
        <Route path='/' element={<Homepage/>}/>
        <Route path='/about-us' element={<About/>}/>
        <Route path='/clients' element={<Clients/>}/>
        <Route path='/services' element={<Services/>}/>
        <Route path='/careers' element={<Careers/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/apply-now' element={<Applynow/>}/>
        <Route path='/web-development' element={<WebDevelopment/>}/>
        <Route path='/admin' element={<Admin/>}/>
        <Route path='/blogpost' element={<BlogPost/>}/>
        <Route path='/mobile-app-development' element={<MobileApp/>}/>
        <Route path='/custom-application' element={<CustomApplications/>}/>
        <Route path='/digital-marketing' element={<DigitalMarketing/>}/>
        <Route path='/saas-applications' element={<SaasApplications/>}/>
        <Route path='/api-development' element={<ApiDevelopment/>}/>
        

      </Routes>
      <FloatingButton/>
    </Router>
     

      
    </>
  )
}

export default App
