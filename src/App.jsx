import { useState } from 'react'
// import './App.css';
// import { BrowserRouter,Routes,Route } from 'react-router-dom';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import { Navbar,Home } from './components';
import { Accordian } from './components';

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/accordian' element={<Accordian/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App
