// always import libraries or named exportsfrom node modules first
import {Routes, Route} from 'react-router-dom'
// then import your components
import Navbar from './components/Navbar'
import ButtonPage from './pages/ButtonPage'
import AccordionPage from './pages/AccordionPage'
import DropdownPage from './pages/DropdownPage'
// then your CSS and or DATA files 
//import './index.css'
// data example
// import dropdownData from './data/dropdown-data

const App = () => {
  return (
    <div className="container mx-auto grid grid-cols-6 gap-4 mt-4">
      <div>
        <Navbar />
      </div>
      <div className="col-span-5 relative">
        <Routes>
          <Route path="/" element={<ButtonPage />} />
          <Route path="/accordion" element={<AccordionPage />} />
          <Route path="/dropdown" element={<DropdownPage />} />
        </Routes>
      </div>
    </div>
  )
  }
  
export default App
