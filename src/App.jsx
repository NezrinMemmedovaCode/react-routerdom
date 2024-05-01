
import './App.css'

import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Nav from './layout/Nav'
import Home from './pages/Home/Home'
import About from './pages/About/About'
import Contact from './pages/Contact/Contact'
import Samplehost from './pages/Samplepost/Samplehost'
import Main from './layout/Main'

function App() {
 

  return (
    <>
   
    <BrowserRouter>
      <Routes>
      <Route path='/' element={<Main />} >

          <Route path='/' element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="samplehost" element={<Samplehost />} />
          </Route>
      </Routes>
    </BrowserRouter>
      
    </>
  )
}

export default App
