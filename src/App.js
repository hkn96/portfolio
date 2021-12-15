import { useLocation } from 'react-router-dom'
import GlobalStyle from './components/GlobalStyle'
import Nav from './components/Nav'
import AboutUs from './pages/AboutUs'
import ContactUs from './pages/ContactUs'
import OurWork from './pages/OurWork'
//Router
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import MovieDetail from './pages/MovieDetail'

//animation
import { AnimatePresence } from 'framer-motion'

function App() {
  const location = useLocation()
  return (
    <div className='App'>
      <GlobalStyle />
      <Nav />
      <AnimatePresence exitBeforeEnter>
        <Routes location={location} key={location.pathname}>
          <Route path='/' element={<AboutUs />}></Route>
          <Route path='/work' element={<OurWork />}></Route>
          <Route path='/work/:id' element={<MovieDetail />}></Route>
          <Route path='/contact' element={<ContactUs />}></Route>
        </Routes>
      </AnimatePresence>
    </div>
  )
}

export default App
