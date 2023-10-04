// import necessary functions, styles, etd.
import React from 'react'
import { BrowserRouter as Router,Routes, Route} from 'react-router-dom'
import './index.css'
import Home from './components/main'
import Calc from './components/calculator'
import Hail from './components/hail'


function App() {
  return (
    //Navigate to the other side (main.jsx, calculator.jsx, hail.jsx)
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/calculator" element={<Calc />} />
        <Route path="/hail" element={<Hail />} />
      </Routes>
    </Router>
  )
  
}

export default App