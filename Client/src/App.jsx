import './App.css'
import Home from './pages/Home'
import { Route, Routes } from 'react-router-dom'
import Profile from './pages/Profile/Profile'
import Login from './pages/Login/Login'

function App() {

  return (
    <Routes>
      <Route path='/login' element={<Login />} />
      <Route path='/' element={<Home />} />
      {/* <Route path='/register' element={<Register />} /> */}
      <Route path='/profile/:username' element={<Profile />} />
    </Routes>
  )
}

export default App
