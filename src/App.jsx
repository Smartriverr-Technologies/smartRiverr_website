
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
import Admin from './pages/admin/Admin.jsx';
import BlogPost from './pages/blogpost/BlogPost.jsx';
function App() {
  return (
    <>
    {/* <Navbar/> */}
    {/* <Homepage/>  */}
    <Router>
      <Routes>
        <Route path='/' element={<Homepage/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/clients' element={<Clients/>}/>
        <Route path='/services' element={<Services/>}/>
        <Route path='/careers' element={<Careers/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/apply-now' element={<Applynow/>}/>
        <Route path='/web-development' element={<WebDevelopment/>}/>
        <Route path='/admin' element={<Admin/>}/>
        <Route path='/blogpost' element={<BlogPost/>}/>

      </Routes>
    </Router>
     

      
    </>
  )
}

export default App
