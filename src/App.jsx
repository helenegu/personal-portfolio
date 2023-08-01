import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contactt from './pages/Contactt';
import NoPage from './pages/NoPage';

const App =()=> {
  return (
    <div>
    <BrowserRouter basename="/personal-portfolio">
    <Routes>
      <Route index element={<Home/>}/>
      <Route path="/home" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/contact" element={<Contactt/>}/>
      <Route path="*" element={<NoPage/>}/>
      </Routes>
      
    </BrowserRouter>
    </div>
  )
}

export default App
