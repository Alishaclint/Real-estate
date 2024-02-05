import { Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './Pages/Home'
import Auth from './Pages/Auth'
import Footer from './Components/Footer'
import Property from './Pages/Property'
import Premium from './Pages/Premium'




function App() {

  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/login' element={<Auth/>} />
      <Route path='/register' element={<Auth insideRegister/>} />
      <Route path='/property' element={<Property/>} />
      <Route path='/premium' element={<Premium/>} />

      <Route path='/*' element={<Navigate to={'/'}/>} />
    </Routes>
    <Footer/>
    </>
  )
}

export default App
