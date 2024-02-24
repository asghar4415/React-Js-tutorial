import React from   'react'
import About from './pages/about'
import Contact from './pages/contact'
import Home from './pages/home'
import JobDetails from './pages/jobDetails'
import './pages/navbar.css'
import { BrowserRouter as Router, Route,Routes, Link } from 'react-router-dom'

const App = () => {
  // -react routing: routing is the process of selecting a path for traffic in a network or between or across multiple networks.
  
  //Dynamic routing: Dynamic routing is a networking technique that provides optimal data routing. It is also known as adaptive routing. Dynamic routing allows for communication between networks to select the best route for data transmission.





  return (
 
       <Router>
        <nav>
          <ul>
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/job">Job Details</Link>
            </li>
          </ul>
        </nav>
        <Routes>
        <Route path="/home" element={<Home/>} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/job" element={<JobDetails />} />
        <Route path ="/job/:id" element={<JobDetails />} />
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>

         
       
      </Router>
      
  )
}

export default App
