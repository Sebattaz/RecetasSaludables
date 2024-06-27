import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import NavBar from './componets/NavBar'
import Home from './views/Home'
import Contact from './views/Contact'
import NotFound from './views/NotFound'


function App() {
 

  return (
   <BrowserRouter>
     <NavBar />
     <main className='container mt-3'>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/contacto' element={<Contact/>} />
          <Route path='*' element={<NotFound/>}/>
        </Routes>
     </main>
   </BrowserRouter>
  )
}

export default App
