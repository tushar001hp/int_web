import { BrowserRouter as Router ,Routes ,Route } from 'react-router-dom'
import Navbar from './component/Navbar/Navbar.jsx'
import Footer from './component/Footer/Footer.jsx'
import Home from './Pages/Homepage/Home.jsx'
import Project from './Pages/Projectpage/Project.jsx'
import Service from './Pages/Servicepage/Service.jsx'
import Contact from './Pages/Contactpage/Contact.jsx'
import Profile from './Pages/Profilepage/Profile.jsx'
const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Project' element={<Project />} />
        <Route path='/Service' element={<Service />} />
        <Route path='/Contact' element={<Contact />} />
        <Route path='/Profile' element={<Profile />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
