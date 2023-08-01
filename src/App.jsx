import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contactt from './pages/Contactt';
import NoPage from './pages/NoPage';

const App =()=> {
  return (
    <div>
    <BrowserRouter>
    <Routes>
      <Route index element={<Home/>}/>
      <Route path="/personal-portfolio" element={<Home/>}/>
      <Route path="/personal-portfolio/about" element={<About/>}/>
      <Route path="/personal-portfolio/contact" element={<Contactt/>}/>
      <Route path="*" element={<NoPage/>}/>
      </Routes>
      
    </BrowserRouter>
    </div>
  )
}

export default App
